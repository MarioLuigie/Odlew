import Logo from '@/components/content/Logo'
import MenuFooter from '@/components/layout/menu/MenuFooter'
import Copyright from '@/components/content/Copyright'
import Link from 'next/link'
import { Routes } from '@/lib/constants/paths'
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center bg-footerBg text-white px-10 py-12">
			<div className="flex flex-col items-center gap-12 w-full">
				<Logo variant="mono" w={270} />
				<div className="flex justify-center w-full max-w-[350px]">
					<div className="w-[2px] bg-accent"></div>
					<MenuFooter />
				</div>
				<Copyright />
			</div>
			<small className="text-teal-600">Created by &copy; ARWcode 2024</small>
			<SignedOut>
				<Link href={Routes.SIGN_IN}>
					<small>admin</small>
				</Link>
			</SignedOut>
			<SignedIn>
				<SignOutButton />
			</SignedIn>
		</footer>
	)
}
