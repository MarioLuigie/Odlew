// lib
import { createContact } from '@/lib/actions/contact.actions'
import { ContactFormValues } from '@/lib/types/zod'
import { toastSuccess, toastError } from '@/lib/utils/toasts'

export const handleCreateContact = async (
	contactFormValues: ContactFormValues
) => {
	const res = await createContact(contactFormValues)

	if (res.success) {
		toastSuccess('Dziękujemy! Twoja wiadomość została pomyślnie wysłana.', 'Formularz kontaktowy.')
	} else if (res.errors) {
		toastError(res.errors)
	}
}
