// modules
import { cva } from 'class-variance-authority'
// lib
import { cn } from '@/lib/utils'
// components
import SVG from '@/components/shared/SVG'
import { Icons } from '@/lib/constants/icons'

type DropProps = {
	corner?: 'bottom-left' | 'top-left' | 'top-right'
	className?: string
}

export default function Drop({ corner, className }: DropProps) {
	const dropVariants = cva('flex', {
		variants: {
			corner: {
				['bottom-left']: 'scale-x-[-1] flex-row-reverse',
				['top-left']: 'scale-x-[-1] scale-y-[-1] flex-row-reverse',
				['top-right']: 'scale-y-[-1]',
			},
		},
		defaultVariants: {
			corner: 'bottom-left',
		},
	})

	return (
		<SVG
			src={Icons.ITEM_BOTTOM_RIGHT_SMALL.path}
			className={cn(className, dropVariants({ corner }))}
		/>
	)
}
