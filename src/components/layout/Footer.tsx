import Logo from '@/components/content/Logo'
import MenuFooter from '@/components/layout/menu/MenuFooter'
import Copyright from '@/components/content/Copyright'
import Link from 'next/link'
import { Routes } from '@/lib/constants/paths'
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center bg-footerBg text-white px-10 py-12 dp:pt-20">
			<div className="flex flex-col items-center gap-12 dp:gap-0 w-full dp:flex-row dp:w-full dp:justify-center">
				<div className="dp:w-1/2 dp:flex dp:justify-end dp:pr-12">
					<Logo variant="mono" w={270} className="dp:hidden" />
					<Logo variant="mono" w={400} className="hidden dp:block" />
				</div>
				<div className='dp:w-1/2'>
					<div className="flex justify-center w-full min-w-[250px] max-w-[420px]">
						<div className="w-[2px] bg-accent"></div>
						<MenuFooter />
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center mt-14">
				<Copyright />
				<small className="text-teal-600 mb-4">
					Created by &copy; ARWcode 2024
				</small>
				<SignedOut>
					<Link href={Routes.SIGN_IN} className="text-center">
						<small>admin</small>
					</Link>
				</SignedOut>
				<SignedIn>
					<SignOutButton />
				</SignedIn>
			</div>
		</footer>
	)
}
