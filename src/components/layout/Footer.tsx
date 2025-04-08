import Logo from '@/components/content/Logo'
import MenuFooter from '@/components/layout/menu/MenuFooter'
import Link from 'next/link'
import { Routes } from '@/lib/constants/paths'
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'

export default function Footer() {
	return (
		<footer className="xl:h-footerHeight flex flex-col items-center justify-center bg-footerBg text-white xl:pl-0 xl:pr-10 xl:pt-6">
			<div className="flex flex-col items-center gap-12 xl:gap-0 w-full xl:flex-row xl:w-full xl:justify-center xl:items-center">
				{/* LOGO */}
				<div className="xl:h-full xl:w-[540px] xl:flex xl:justify-center xl:items-center xl:px-28">
					<Logo variant="mono" w={270} className="xl:hidden" />
					<Logo variant="mono" w={270} className="hidden xl:block" />
				</div>

				{/* MENU */}
				<div className="xl:w-full xl:pr-12">
					<div className="flex justify-center w-full min-w-[250px]">
						<div className="w-[2px] bg-accent"></div>
						<MenuFooter />
					</div>
				</div>
			</div>

			{/* ADMIN */}
			<div>
				<SignedOut>
					<Link href={Routes.SIGN_IN} className="text-center text-teal-600">
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
