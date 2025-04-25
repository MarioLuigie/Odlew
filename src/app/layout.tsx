import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'
import BlockCopy from '@/components/shared/BlockCopy'
import './globals.css'

const beVietnamPro = localFont({
	src: [
		{ path: './fonts/BeVietnamPro-Thin.ttf', weight: '100', style: 'normal' },
		{
			path: './fonts/BeVietnamPro-ThinItalic.ttf',
			weight: '100',
			style: 'italic',
		},
		{
			path: './fonts/BeVietnamPro-ExtraLight.ttf',
			weight: '200',
			style: 'normal',
		},
		{
			path: './fonts/BeVietnamPro-ExtraLightItalic.ttf',
			weight: '200',
			style: 'italic',
		},
		{
			path: './fonts/BeVietnamPro-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/BeVietnamPro-LightItalic.ttf',
			weight: '300',
			style: 'italic',
		},
		{
			path: './fonts/BeVietnamPro-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/BeVietnamPro-Italic.ttf',
			weight: '400',
			style: 'italic',
		},
		{
			path: './fonts/BeVietnamPro-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/BeVietnamPro-MediumItalic.ttf',
			weight: '500',
			style: 'italic',
		},
		{
			path: './fonts/BeVietnamPro-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/BeVietnamPro-SemiBoldItalic.ttf',
			weight: '600',
			style: 'italic',
		},
		{ path: './fonts/BeVietnamPro-Bold.ttf', weight: '700', style: 'normal' },
		{
			path: './fonts/BeVietnamPro-BoldItalic.ttf',
			weight: '700',
			style: 'italic',
		},
		{
			path: './fonts/BeVietnamPro-ExtraBold.ttf',
			weight: '800',
			style: 'normal',
		},
		{
			path: './fonts/BeVietnamPro-ExtraBoldItalic.ttf',
			weight: '800',
			style: 'italic',
		},
		{
			path: './fonts/BeVietnamPro-Black.ttf',
			weight: '900',
			style: 'normal',
		},
		{
			path: './fonts/BeVietnamPro-BlackItalic.ttf',
			weight: '900',
			style: 'italic',
		},
	],
	variable: '--font-be-vietnam-pro',
})

export const metadata: Metadata = {
	title: 'Odlew',
	description: 'P.S - Odlew Pracownia odlewnicza',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider
			appearance={{
				variables: { colorPrimary: '#E36A00' },
			}}
		>
			<html lang="pl">
				<body
					className={`${beVietnamPro.variable} antialiased bg-[#f1f1f1]`}
				>
					{children}
					<Toaster />
					<BlockCopy />
				</body>
			</html>
		</ClerkProvider>
	)
}
