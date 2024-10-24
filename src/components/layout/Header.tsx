// components
import Logo from '@/components/content/Logo'

export default function Header() {
	return (
		<header className="h-[120px] w-full flex items-center px-2 bg-black">
			<Logo w={205} h={103} />
		</header>
	)
}
