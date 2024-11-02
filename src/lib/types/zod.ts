import { z } from "zod"

// ContactForm Schema
export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(5, "Imię musi zawierać min. 5 znaków")
    .max(40, "Imie może zawierać max. 40 znaków"),
  topic: z
    .string()
    .min(3, "Temat musi zawierać min. 3 znaki")
    .max(40, "Temat może zawierać max. 40 znaków"),
  email: z.string().email("Niepoprawny adres email"),
  message: z
    .string()
    .min(40, "Wiadomość musi zawierać min. 40 znaków")
    .max(500, "Wiadomość musi zawierać min. 500 znaków"),
})
