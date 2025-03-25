
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "./schema";

interface ContactFormFieldsProps {
  form: UseFormReturn<ContactFormValues>;
}

export const ContactFormFields = ({ form }: ContactFormFieldsProps) => {
  return (
    <>
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
    </>
  );
};
