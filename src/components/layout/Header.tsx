// components
import Logo from '@/components/content/Logo'
import Menu from '@/components/content/MenuSheet'

export default function Header() {
	return (
		<header className="h-[120px] w-full flex items-center justify-between px-4 py-2 bg-header">
			<Logo w={205} h={103} />
			<Menu />
		</header>
	)
}
