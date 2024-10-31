// modules
import Image from 'next/image'
import Link from 'next/link'
// lib
import { Images } from '@/lib/constants/images'
import { Routes } from '@/lib/constants/paths'

type LogoProps = {
	w?: number
	h?: number
	variant?: 'color' | 'mono'
	min?: boolean
}

export default function Logo({ w, h, variant='color' }: LogoProps) {
	return (
		<Link href={Routes.HOME}>
			{variant === 'color' ? (
				<Image
					src={Images.LOGO.path}
					height={h || 54}
					width={w || 130}
					alt={Images.LOGO.alt}
					priority
				/>
			) : (
				<Image
					src={Images.LOGO_WHITE.path}
					height={h || 54}
					width={w || 130}
					alt={Images.LOGO.alt}
					priority
				/>
			)}
		</Link>
	)
}
