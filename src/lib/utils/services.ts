'use server'

import { auth } from '@clerk/nextjs/server'
import { ContactFormValues } from '@/lib/types/zod'
import { Domains, ImagesPath } from '@/lib/constants/paths'

export async function checkIsAdmin(): Promise<boolean> {
	const { sessionClaims } = await auth()
	return sessionClaims?.metadata.role === 'admin'
}

export const generateEmailTemplate = async (
	contactFormValues: ContactFormValues
) => {
	return `
				<!DOCTYPE html>
				<html>
				<head>
						<style>
								body {
										font-family: Arial, sans-serif;
										line-height: 1.6;
										color: #333;
								}
								.container {
										width: 100%;
										max-width: 600px;
										margin: 0 auto;
										border: 1px solid #ddd;
										border-radius: 12px;
										padding: 20px;
										box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
								}
								.header {
										text-align: center;
										margin-bottom: 20px;
								}
								.logo {
										max-width: 150px;
								}
								.message-details {
										margin-top: 20px;
								}
								.message-details p {
										margin: 5px 0;
								}
								.footer {
										text-align: center;
										margin-top: 30px;
										font-size: 0.9em;
										color: #555;
								}
						</style>
				</head>
				<body>
						<div class="container">
								<div class="header">
										<img class="logo" src=${Domains.default + ImagesPath.LOGO_MIN} alt="Logo">
										<h1>Nowa wiadomość z formularza kontaktowego!</h1>
								</div>
								<div class="message-details">
										<p><strong>Nadawca:</strong> ${contactFormValues.name}</p>
										<p><strong>E-mail:</strong> ${contactFormValues.email}</p>
										<p><strong>Temat:</strong> ${contactFormValues.topic}</p>
										<p><strong>Wiadomość:</strong> ${contactFormValues.message}</p>
								</div>
								<div class="footer">
										<p>Odlew Odlewnia Artystyczna</p>
										<p>© 2024 Wszystkie prawa zastrzeżone</p>
								</div>
						</div>
				</body>
				</html>
        `
}
