// components
import Logo from '@/components/content/Logo'
import MenuSheet from '@/components/layout/menu/MenuSheet'

export default function Header() {
	return (
		<header className="z-50 min-h-header w-full sticky top-0 flex items-center justify-between px-5 py-2 bg-header">
			<Logo w={130} />
			<MenuSheet />
		</header>
	)
}
