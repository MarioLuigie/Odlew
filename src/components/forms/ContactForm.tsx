'use client'
// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
// lib
import { FormFieldType } from '@/lib/types/enums'
import { ContactFormSchema, ContactFormValues } from '@/lib/types/zod'
import { handleCreateContact } from '@/lib/handlers/contact.handlers'
// components
import { Form } from '@/components/ui/form'
import CustomFormField from '@/components/shared/CustomFormField'
import SubmitButton from '@/components/shared/SubmitButton'
import FieldsRequiredDesc from '@/components/content/FieldsRequiredDesc'

export default function ContactForm() {
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			name: '',
			topic: '',
			email: '',
			message: '',
		},
	})

	const { isSubmitting } = form.formState

	const onSubmit: SubmitHandler<ContactFormValues> = async (
		contactFormValues: ContactFormValues
	) => {
		try {
			console.log('contact form values:', contactFormValues)
			await handleCreateContact(contactFormValues)
			form.reset()
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error(
					'Error from onSubmit for ContactForm while sending message',
					err.message
				)
			} else {
				console.error('An unknown error occurred:', err)
			}
			throw new Error('An error occurred while sending message from form.')
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6"
			>
				{/* Name */}
				<CustomFormField
					control={form.control}
					typeField={FormFieldType.INPUT}
					name="name"
					label="Imię*"
					placeholder="Twoje imię"
					// iconSrc={Icons.USER_ICON.path}
					// iconAlt={Icons.USER_ICON.alt}
				/>
				{/* Topic */}
				<CustomFormField
					control={form.control}
					typeField={FormFieldType.INPUT}
					name="topic"
					label="Temat"
					placeholder="Temat wiadomości"
					// iconSrc={Icons.USER_ICON.path}
					// iconAlt={Icons.USER_ICON.alt}
				/>
				{/* Email */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.INPUT}
						name="email"
						label="Adres e-mail*"
						placeholder="Twój e-mail"
						// iconSrc={Icons.EMAIL_ICON.path}
						// iconAlt={Icons.EMAIL_ICON.alt}
					/>
				</div>
				{/* Message */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.TEXTAREA}
						name="message"
						label="Wiadomość*"
						placeholder="Treść wiadomości"
						// iconSrc={Icons.EMAIL_ICON.path}
						// iconAlt={Icons.EMAIL_ICON.alt}
					/>
				</div>
				<div>
					<SubmitButton isLoading={isSubmitting} className="w-full mt-2">
						Wyślij wiadomość
					</SubmitButton>
					<FieldsRequiredDesc className='mt-2 dp:justify-start'/>
				</div>
			</form>
		</Form>
	)
}
