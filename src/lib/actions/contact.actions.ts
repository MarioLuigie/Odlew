'use server'
// modules
// import mongoose from 'mongoose'
// import { revalidatePath } from 'next/cache'
// lib
import { ContactFormValues } from '@/lib/types/zod'
import { IContact, ContactModel } from '@/lib/models/contact.model'
import { connectToDB } from '@/lib/utils/db'
import { deepClone } from '@/lib/utils'
// import { Routes } from '@/lib/constants/paths'

export const createContact = async (
	contactFormValues: ContactFormValues
): Promise<Result<IContact>> => {

	console.log('ContactFormValues-createContact:', contactFormValues)

	try {
		await connectToDB()

		const createdContact: IContact = await ContactModel.create(
			contactFormValues
		)

		console.log('Created Contact:', createdContact)

		return {
      success: true,
      data: deepClone(createdContact)
    }
	} catch (err) {
		console.error(err)
    return {
			success: false,
			errors: {
				error: 'Coś poszło nie tak podczas wysyłania wiadomości. Spróbuj później.',
			}
    }
	}
}
