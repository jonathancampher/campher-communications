
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from './schema';
import { ContactFormFields } from './ContactFormFields';
import { SubmitButton } from './SubmitButton';
import { submitContactForm } from '@/utils/form-submission';
import { useLanguageContext } from '@/context/LanguageContext';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const { language } = useLanguageContext();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      consent: false
    }
  });

  const texts = {
    no: {
      heading: "Send oss en melding",
      successTitle: "Melding sendt",
      successDesc: "Takk for din henvendelse. Vi vil ta kontakt med deg snart! Sjekk spam-mappen om du ikke ser svaret vårt innen kort tid.",
      errorTitle: "Noe gikk galt",
      errorDesc: "Vi kunne ikke sende meldingen din. Vennligst prøv igjen senere.",
      noScriptMessage: "Dette skjemaet krever JavaScript for å fungere. Vennligst aktiver JavaScript eller kontakt oss direkte via e-post.",
      alternativeContact: "Foretrekker du å sende e-post direkte?",
      errorAlternative: "Du kan også ta kontakt med oss direkte på"
    },
    en: {
      heading: "Send us a message",
      successTitle: "Message sent",
      successDesc: "Thank you for your inquiry. We will contact you soon! Please check your spam folder if you don't see our response shortly.",
      errorTitle: "Something went wrong",
      errorDesc: "We could not send your message. Please try again later.",
      noScriptMessage: "This form requires JavaScript to function. Please enable JavaScript or contact us directly via email.",
      alternativeContact: "Prefer to send email directly?",
      errorAlternative: "You can also contact us directly at"
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      await submitContactForm(data);
      
      toast({
        title: t.successTitle,
        description: t.successDesc,
      });
      
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError(t.errorDesc);
      toast({
        title: t.errorTitle,
        description: t.errorDesc,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const noScriptMessage = 
    <noscript>
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800 mb-4">
        {t.noScriptMessage}
      </div>
    </noscript>;

  return (
    <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm" role="region" aria-labelledby="contact-form-heading">
      <h3 className="text-xl font-medium mb-6" id="contact-form-heading">{t.heading}</h3>
      
      {noScriptMessage}
      
      {formError && (
        <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-md text-red-700" role="alert">
          <p>{formError}</p>
          <p className="text-sm mt-1">
            {t.errorAlternative}{' '}
            <a href="mailto:kontakt@camphercommunications.no" className="underline font-medium text-red-800 hover:text-red-900">
              kontakt@camphercommunications.no
            </a>
          </p>
        </div>
      )}
      
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-5"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          encType="application/x-www-form-urlencoded"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} />
            </label>
          </div>
          
          <ContactFormFields form={form} />
          
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
      
      <div className="mt-6 text-sm text-gray-700">
        {t.alternativeContact}{' '}
        <a 
          href="mailto:kontakt@camphercommunications.no" 
          className="text-campher-blue font-medium hover:text-blue-800 underline transition-colors"
          aria-label={language === 'no' ? "Send e-post til kontakt@camphercommunications.no" : "Send email to kontakt@camphercommunications.no"}
        >
          kontakt@camphercommunications.no
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
