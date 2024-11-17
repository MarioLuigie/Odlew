// lib
import { App } from '@/lib/constants/texts'
import { cn } from '@/lib/utils'
// components
import TextVerticalLine from '@/components/shared/TextVerticalLine'

export default function CompanyName({ mode }: { mode: 'dark' | 'light' }) {
	const textStyles = 'text-[21px] text-right'
	const textVariants = {
		dark: 'text-textDark',
		light: 'text-textLight',
	}
	return (
		<TextVerticalLine className="text-right h-auto" mode={mode}>
			<p className={cn(textStyles, textVariants[mode])}>{App.NAME}</p>
			<p className={cn(textStyles, textVariants[mode])}>{App.SUBNAME}</p>
		</TextVerticalLine>
	)
}
