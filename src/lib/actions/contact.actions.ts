'use server'
// modules
// import mongoose from 'mongoose'
// import { revalidatePath } from 'next/cache'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'
// lib
import { ContactFormValues } from '@/lib/types/zod'
import { IContact, ContactModel } from '@/lib/models/contact.model'
import { connectToDB } from '@/lib/utils/db'
import { deepClone } from '@/lib/utils'
// import { Routes } from '@/lib/constants/paths'

export const createContact = async (
	contactFormValues: ContactFormValues
): Promise<Result<IContact>> => {
	const OAuth2 = google.auth.OAuth2
	console.log('ContactFormValues-createContact:', contactFormValues)
	console.log('google:', google)
	console.log('OAuth2:', OAuth2)

	try {
		await connectToDB()

		const createdContact: IContact = await ContactModel.create(
			contactFormValues
		)

		console.log('Created Contact:', createdContact)

		const oauth2Client = new OAuth2(
			process.env.CLIENT_ID,
			process.env.CLIENT_SECRET,
			'https://developers.google.com/oauthplayground'
		)

		oauth2Client.setCredentials({
			refresh_token: process.env.REFRESH_TOKEN,
		})

		const accessToken = await new Promise((resolve, reject) => {
			oauth2Client.getAccessToken((err, token) => {
				if (err) {
					console.log('*ERR: ', err)
					reject()
				}
				resolve(token)
			})
		})

		console.log('AccessToken:', accessToken)

		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				type: 'OAuth2',
				user: process.env.EMAIL_USER,
				accessToken,
				clientId: process.env.CLIENT_ID,
				clientSecret: process.env.CLIENT_SECRET,
				refreshToken: process.env.REFRESH_TOKEN,
			},
		} as nodemailer.TransportOptions)

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.OWNER_EMAIL,
			subject: `Nowa wiadomość od ${contactFormValues.name} - Temat: ${contactFormValues.topic}`,
			text: `
        Nowa wiadomość została wysłana przez formularz kontaktowy na stronie Odlew Odlewnia Artystyczna .

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
			data: deepClone(createdContact),
		}
	} catch (err) {
		console.error(err)
		return {
			success: false,
			errors: {
				error: 'Coś poszło nie tak podczas wysyłania wiadomości. Spróbuj później.',
			},
		}
	}
}

// TEST NODEMAILER

// 'use server'
// // modules
// import nodemailer from 'nodemailer'
// // lib
// import { ContactFormValues } from '@/lib/types/zod'
// import { IContact, ContactModel } from '@/lib/models/contact.model'
// import { connectToDB } from '@/lib/utils/db'
// import { deepClone } from '@/lib/utils'

// export const createContact = async (
// 	contactFormValues: ContactFormValues
// ): Promise<Result<IContact>> => {
// 	console.log('ContactFormValues-createContact:', contactFormValues)

// 	try {
// 		await connectToDB()

// 		const createdContact: IContact = await ContactModel.create(
// 			contactFormValues
// 		)

// 		console.log('Created Contact:', createdContact)

//     const transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASSWORD,
//       }
//   });

// 		const mailOptions = {
// 			from: process.env.EMAIL_USER,
// 			to: process.env.OWNER_EMAIL,
// 			subject: `Nowa wiadomość od ${contactFormValues.name} - Temat: ${contactFormValues.topic}`,
// 			text: `
//         Nowa wiadomość została wysłana przez formularz kontaktowy na stronie Odlew Odlewnia Artystyczna .

//         Szczegóły wiadomości:

//         Imię: ${contactFormValues.name}
//         E-mail: ${contactFormValues.email}
//         Temat: ${contactFormValues.topic}
//         Wiadomość: ${contactFormValues.message}

//         Id zapisu w MongoDB: ${createdContact._id}
//       `,
// 		}

// 		await transporter.sendMail(mailOptions)

// 		return {
// 			success: true,
// 			data: deepClone(createdContact),
// 		}
// 	} catch (err) {
// 		console.error(err)
// 		return {
// 			success: false,
// 			errors: {
// 				error: 'Coś poszło nie tak podczas wysyłania wiadomości. Spróbuj później.',
// 			},
// 		}
// 	}
// }
