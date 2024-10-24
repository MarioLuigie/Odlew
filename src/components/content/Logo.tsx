// modules
import Image from 'next/image'
import Link from 'next/link'
// lib
import { Images } from '@/lib/constants/images'
import { Routes } from '@/lib/constants/paths'

type LogoProps = {
  w?: number
  h?: number
}

export default function Logo({w, h }: LogoProps) {
	return (
		<Link href={Routes.HOME}>
			<Image
				src={Images.LOGO.path}
				height={h || 82}
				width={w || 164}
				alt={Images.LOGO.alt}
				priority
			/>
		</Link>
	)
}
