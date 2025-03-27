
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from './schema';
import { ContactFormFields } from './ContactFormFields';
import { SubmitButton } from './SubmitButton';
import { submitContactForm } from '@/utils/form-submission';

/**
 * ContactForm-komponent
 * 
 * Håndterer kontaktskjemaet i kontaktseksjonen.
 * Integrert med Netlify Forms for å håndtere form submissions.
 * Optimalisert for ytelse, cross-browser støtte og tilgjengelighet.
 */
const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  // Initialize form with validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      await submitContactForm(data);
      
      toast({
        title: "Melding sendt",
        description: "Takk for din henvendelse. Vi vil ta kontakt med deg snart!",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError("Vi kunne ikke sende meldingen din. Vennligst prøv igjen senere.");
      toast({
        title: "Noe gikk galt",
        description: "Vi kunne ikke sende meldingen din. Vennligst prøv igjen senere.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fallback for browsers with JavaScript disabled
  const noScriptMessage = 
    <noscript>
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800 mb-4">
        Dette skjemaet krever JavaScript for å fungere. Vennligst aktiver JavaScript eller kontakt oss direkte via e-post.
      </div>
    </noscript>;

  return (
    <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm" role="region" aria-labelledby="contact-form-heading">
      <h3 className="text-xl font-medium mb-6" id="contact-form-heading">Send oss en melding</h3>
      
      {noScriptMessage}
      
      {/* Display error message if form submission failed */}
      {formError && (
        <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-md text-red-700" role="alert">
          <p>{formError}</p>
          <p className="text-sm mt-1">
            Du kan også ta kontakt med oss direkte på{' '}
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
          {/* Important hidden fields for Netlify */}
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
      
      {/* Progressive enhancement - alternative contact method with improved contrast */}
      <div className="mt-6 text-sm text-gray-700">
        Foretrekker du å sende e-post direkte?{' '}
        <a 
          href="mailto:kontakt@camphercommunications.no" 
          className="text-campher-blue font-medium hover:text-blue-800 underline transition-colors"
          aria-label="Send e-post til kontakt@camphercommunications.no"
        >
          kontakt@camphercommunications.no
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
