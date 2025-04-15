
import { z } from "zod";

const errorMessages = {
  no: {
    required: "Dette feltet er påkrevd",
    email: "Vennligst oppgi en gyldig e-postadresse",
    consent: "Du må godta personvernvilkårene for å sende skjemaet"
  },
  en: {
    required: "This field is required",
    email: "Please provide a valid email address",
    consent: "You must accept the privacy policy to submit the form"
  }
};

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Dette feltet er påkrevd" }),
  email: z.string().min(1, { message: "Dette feltet er påkrevd" }).email({ message: "Vennligst oppgi en gyldig e-postadresse" }),
  subject: z.string().min(1, { message: "Dette feltet er påkrevd" }),
  message: z.string().min(1, { message: "Dette feltet er påkrevd" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "Du må godta personvernvilkårene for å sende skjemaet"
  })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
