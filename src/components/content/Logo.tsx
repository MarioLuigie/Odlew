import Image from 'next/image'
import Link from 'next/link'
import { Images } from '@/lib/constants/images'
import { Routes } from '@/lib/constants/paths'

type LogoProps = {
	w?: number
	h?: number
	variant?: 'color' | 'mono'
}

export default function Logo({
	w = 130,
	h = 54,
	variant = 'color',
}: LogoProps) {
	const imageSrc =
		variant === 'color' ? Images.LOGO.path : Images.LOGO_WHITE.path
	const mobileImageSrc = variant === 'color' ? Images.LOGO_MIN.path : imageSrc
	const imageAlt = Images.LOGO.alt

	return (
		<Link href={Routes.HOME}>
			<Image
				src={imageSrc}
				height={h}
				width={w}
				alt={imageAlt}
				priority
				className="hidden md:block"
			/>
			<Image
				src={mobileImageSrc}
				height={h}
				width={50}
				alt={imageAlt}
				priority
				className="md:hidden"
			/>
		</Link>
	)
}
