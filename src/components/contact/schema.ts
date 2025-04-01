
import { z } from "zod";

// Define form schema with validation
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Navn må være minst 2 tegn" }),
  email: z.string().email({ message: "Ugyldig e-postadresse" }),
  subject: z.string().min(5, { message: "Emne må være minst 5 tegn" }),
  message: z.string().min(10, { message: "Meldingen må være minst 10 tegn" }),
  consent: z.boolean().refine(val => val === true, {
    message: "Du må godta personvernvilkårene for å sende skjemaet"
  })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
