import { z } from 'zod'

// ContactForm Schema
export const ContactFormSchema = z.object({
	name: z
		.string()
		.min(5, 'Imię musi zawierać min. 5 znaków')
		.max(40, 'Imie może zawierać max. 40 znaków'),
	topic: z
		.string()
		.min(3, 'Temat musi zawierać min. 3 znaki')
		.max(40, 'Temat może zawierać max. 40 znaków')
		.optional(),
	email: z.string().email('Niepoprawny adres email'),
	message: z
		.string()
		.min(40, 'Wiadomość musi zawierać min. 40 znaków')
		.max(500, 'Wiadomość może zawierać max. 500 znaków'),
})

export type ContactFormValues = z.infer<typeof ContactFormSchema>

// OpinionForm Schema
export const OpinionFormSchema = z.object({
	name: z
		.string()
		.min(5, 'Imię musi zawierać min. 5 znaków')
		.max(40, 'Imie może zawierać max. 40 znaków'),
	stars: z
		.number()
		.int()
		.refine((n) => n !== 0, {
			message: 'Zaznacz gwiazdki',
		}),
	opinion: z
		.string()
		.min(5, 'Opinia musi zawierać min. 5 znaków')
		.max(200, 'Opinia może zawierać max. 200 znaków'),
})

export type OpinionFormValues = z.infer<typeof OpinionFormSchema>
