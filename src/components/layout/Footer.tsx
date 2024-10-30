import Logo from '@/components/content/Logo'
import MenuFooter from '@/components/layout/menu/MenuFooter'
import Copyright from '@/components/content/Copyright'

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center bg-footer text-white p-6 py-12">
			<div className="flex flex-col gap-12">
				<Logo variant="mono" w={270} />
				<div className="flex justify-center w-full">
					<div className="w-[2px] bg-accent ml-2"></div>
					<MenuFooter />
				</div>
				<Copyright />
			</div>
		</footer>
	)
}
