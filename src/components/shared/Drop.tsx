// modules
import { cva } from 'class-variance-authority'
// lib
import { cn } from '@/lib/utils'

type DropProps = {
	corner?: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right'
	className?: string
	text?: string
}

export default function Drop({ corner, className, text }: DropProps) {
	const dropVariants = cva('flex', {
		variants: {
			corner: {
				['bottom-left']: 'rounded-bl-none',
				['bottom-right']: 'rounded-br-none',
				['top-left']: 'rounded-tl-none',
				['top-right']: 'rounded-tr-none',
			},
		},
		defaultVariants: {
			corner: 'bottom-left',
		},
	})

	return (
		<div
			className={cn(
				'w-[35px] h-[35px] flex justify-center items-center bg-accent rounded-full',
				className,
				dropVariants({ corner })
			)}
		>
			{text && <p className="text-[20px] text-textLight">{text}</p>}
		</div>
	)
}
