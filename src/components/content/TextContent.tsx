import { cn } from '@/lib/utils'

export default function TextContent({
	children,
  className,
}: {
	children: React.ReactNode
  className?: string
}) {
	return (
		<div className={cn('text-justify mb-8 px-5 text-textDark', className)}>
			{children}
		</div>
	)
}
