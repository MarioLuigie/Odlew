import { cn } from '@/lib/utils'

export default function Title({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div
			className={cn(
				'pt-5 flex flex-col text-[21px] leading-7 font-[600] text-textDark',
				className
			)}
		>
			{children}
		</div>
	)
}
