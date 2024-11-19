// modules
import * as icons from 'lucide-react'
// components
import SVG from '@/components/shared/SVG'
// lib
import { LucideIcons } from '@/lib/types/enums'

export default function LucideIcon({
	icon,
	className,
	size = 24,
	src,
}: {
	icon?: LucideIcons
	className?: string
	size?: number
	src?: string
}) {
	if (icon) {
		const LucideIcon = icons[icon]
		if (LucideIcon) {
			return <LucideIcon className={className} size={size} />
		} else {
			return null
		}
	}
	if (src) {
		return <SVG src={src} className={className} />
	}
	return null
}