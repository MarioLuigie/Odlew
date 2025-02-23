// components
import Logo from '@/components/content/Logo'
import MenuSheet from '@/components/layout/menu/MenuSheet'
import MenuHeader from '@/components/layout/menu/MenuHeader'

export default function Header() {
	return (
		<header className="z-50 min-h-header dp:min-h-[130px] w-full sticky top-0 flex items-center justify-between px-5 py-2 bg-transparent">
			<Logo w={210} />
			<MenuSheet />
			<MenuHeader capitalize='first'/>
		</header>
	)
}
