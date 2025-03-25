
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * ContactForm-komponent
 * 
 * Håndterer kontaktskjemaet i kontaktseksjonen.
 * Integrert med Netlify Forms for å håndtere form submissions.
 */

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Navn må være minst 2 tegn" }),
  email: z.string().email({ message: "Ugyldig e-postadresse" }),
  subject: z.string().min(5, { message: "Emne må være minst 5 tegn" }),
  message: z.string().min(10, { message: "Meldingen må være minst 10 tegn" })
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
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
      // Netlify Forms submission for production
      if (window.location.hostname !== 'localhost') {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });
        
        // Add form-name field which is required by Netlify
        formData.append('form-name', 'contact');
        
        await fetch('/', {
          method: 'POST',
          body: formData,
        });
      } else {
        // Development environment mock - just log
        console.log('Form submission data:', data);
        // Wait to simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
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
      
      {/* Hidden form for Netlify form detection */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>
      
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-5"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-campher-gray">Ditt navn</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
                      placeholder="Ole Nordmann"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-campher-gray">Din e-post</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      type="email"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
                      placeholder="ole@eksempel.no"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-campher-gray">Emne</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
                    placeholder="Prosjektforespørsel"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-campher-gray">Melding</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition resize-none"
                    placeholder="Fortell oss om ditt prosjekt..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors w-full"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sender...
              </span>
            ) : (
              <span className="flex items-center">
                Send melding
                <Send size={16} className="ml-2" />
              </span>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
