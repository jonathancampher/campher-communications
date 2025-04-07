
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "./schema";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguageContext } from "@/context/LanguageContext";

interface ContactFormFieldsProps {
  form: UseFormReturn<ContactFormValues>;
}

export const ContactFormFields = ({ form }: ContactFormFieldsProps) => {
  const { language } = useLanguageContext();
  
  const texts = {
    no: {
      name: "Ditt navn",
      namePlaceholder: "Ole Nordmann",
      email: "Din e-post",
      emailPlaceholder: "ole@eksempel.no",
      subject: "Emne",
      subjectPlaceholder: "Prosjektforespørsel",
      message: "Melding",
      messagePlaceholder: "Fortell oss om ditt prosjekt...",
      consent: "Jeg godtar at mine oppgitte opplysninger lagres og brukes for å besvare min henvendelse i henhold til",
      privacyPolicy: "personvernvilkårene"
    },
    en: {
      name: "Your name",
      namePlaceholder: "John Smith",
      email: "Your email",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "Project inquiry",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      consent: "I agree that my provided information will be stored and used to respond to my inquiry in accordance with the",
      privacyPolicy: "privacy policy"
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-campher-gray">{t.name}</FormLabel>
              <FormControl>
                <input
                  {...field}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
                  placeholder={t.namePlaceholder}
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
              <FormLabel className="text-sm font-medium text-campher-gray">{t.email}</FormLabel>
              <FormControl>
                <input
                  {...field}
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
                  placeholder={t.emailPlaceholder}
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
            <FormLabel className="text-sm font-medium text-campher-gray">{t.subject}</FormLabel>
            <FormControl>
              <input
                {...field}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
                placeholder={t.subjectPlaceholder}
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
            <FormLabel className="text-sm font-medium text-campher-gray">{t.message}</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                rows={5}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition resize-none"
                placeholder={t.messagePlaceholder}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="consent"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                id="consent"
                className="mt-1 data-[state=checked]:bg-campher-blue"
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel htmlFor="consent" className="text-sm font-normal text-gray-700 cursor-pointer">
                {t.consent} <a href="/personvern" className="text-campher-blue hover:underline">{t.privacyPolicy}</a>.
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </>
  );
};
