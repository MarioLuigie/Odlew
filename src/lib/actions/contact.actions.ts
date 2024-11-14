'use server'
// modules
// import mongoose from 'mongoose'
// import { revalidatePath } from 'next/cache'
import nodemailer from 'nodemailer'
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

    const transporter = nodemailer.createTransport({
      service: 'gmail', // lub inny dostawca SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL, // Adres e-mail właściciela strony
      subject: `Nowa wiadomość od ${contactFormValues.name} - Temat: ${contactFormValues.topic}`,
      text: `
        Nowa wiadomość została wysłana przez formularz kontaktowy na stronie.

        Szczegóły wiadomości:

        Imię: ${contactFormValues.name}
        E-mail: ${contactFormValues.email}
        Temat: ${contactFormValues.topic}
        Wiadomość: ${contactFormValues.message}

        Id zapisu w MongoDB: ${createdContact._id}
      `,
    }

    await transporter.sendMail(mailOptions)

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
