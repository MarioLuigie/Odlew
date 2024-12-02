// lib
import { App } from '@/lib/constants/texts'
import { cn } from '@/lib/utils'
// components
import TextVerticalLine from '@/components/shared/TextVerticalLine'

export default function CompanyName({
	mode,
	className,
}: {
	mode: 'dark' | 'light'
	className?: string
}) {
	const textStyles = 'text-[21px] text-right'
	const textVariants = {
		dark: 'text-textDark',
		light: 'text-textLight',
	}
	return (
		<TextVerticalLine
			className={cn('text-right h-auto', className)}
			mode={mode}
		>
			<p className={cn(textStyles, textVariants[mode])}>{App.NAME}</p>
			<p className={cn(textStyles, textVariants[mode])}>{App.SUBNAME}</p>
		</TextVerticalLine>
	)
}
