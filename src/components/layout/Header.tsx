// components
import Logo from '@/components/content/Logo'
import MenuSheet from '@/components/layout/menu/MenuSheet'
import MenuHeader from '@/components/layout/menu/MenuHeader'

export default function Header() {
	return (
		<header className="z-50 min-h-header w-full max-w-[1920px] fixed top-0 flex items-center justify-between px-5 py-2 bg-black/50 backdrop-blur-lg lg:pr-[50px]">
			<Logo w={210} />
			<MenuSheet />
			<MenuHeader capitalize='first'/>
		</header>
	)
}


