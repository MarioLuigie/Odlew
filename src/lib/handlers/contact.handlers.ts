// lib
import { createContact } from '@/lib/actions/contact.actions'
import { ContactFormValues } from '@/lib/types/zod'

export const handleCreateContact = async (
	contactFormValues: ContactFormValues
) => {
	const res = await createContact(contactFormValues)

  console.log('res from handleCreateContact:', res)
}
