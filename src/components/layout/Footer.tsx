import Logo from '@/components/content/Logo';
import MenuFooter from '@/components/layout/menu/MenuFooter';
import Link from 'next/link';
import { Routes } from '@/lib/constants/paths';
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';

export default function Footer() {
	return (
		<footer className="lg:h-footerHeight xl:h-footerHeight flex flex-col items-center justify-center bg-footerBg text-white lg:px-8 xl:px-10 xl:pt-6">
			<div className="flex flex-col items-center gap-12 xl:gap-0 w-full lg:flex-row xl:flex-row xl:w-full xl:justify-center xl:items-center">
				{/* LOGO */}
				<div className="xl:h-full lg:w-[400px] xl:w-[540px] xl:flex xl:justify-center xl:items-center xl:px-28">
					<Logo variant="mono" w={270} className="xl:hidden" />
					<Logo variant="mono" w={270} className="hidden xl:block" />
				</div>

				{/* MENU */}
				<div className="lg:w-full xl:w-full lg:pr-12 xl:pr-12">
					<div className="flex justify-center w-full min-w-[250px]">
						<div className="w-[2px] bg-accent"></div>
						<MenuFooter />
					</div>
				</div>
			</div>

			{/* ADMIN */}
			<div className="w-full flex flex-col items-end justify-center">
				<div className='flex flex-col items-start justify-center'>
					<div className="flex items-center justify-end gap-2 text-teal-600">
						<small>Created by &copy; ARWcode 2024</small>
						<SignedOut>
							<Link href={Routes.SIGN_IN} className="pb-[4px]">
								<small>| Admin |</small>
							</Link>
						</SignedOut>
						<SignedIn>
							<SignOutButton />
						</SignedIn>
					</div>
					<div className="text-teal-600">
						<small>UI-UX Design by Dominika Zborowska</small>
					</div>
				</div>
			</div>
		</footer>
	);
}
