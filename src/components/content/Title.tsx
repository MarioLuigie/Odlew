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
				'mb-6 px-5 pt-5 flex flex-col text-[21px] leading-7 font-[600] text-textDark',
				className
			)}
		>
			{children}
		</div>
	)
}
