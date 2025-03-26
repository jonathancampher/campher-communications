
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
 */
const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
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
      toast({
        title: "Noe gikk galt",
        description: "Vi kunne ikke sende meldingen din. Vennligst prøv igjen senere.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <h3 className="text-xl font-medium mb-6">Send oss en melding</h3>
      
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-5"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Important hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>
          
          <ContactFormFields form={form} />
          
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
