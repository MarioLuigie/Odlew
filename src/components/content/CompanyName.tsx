import { App } from '@/lib/constants/texts'
import { cn } from '@/lib/utils'

type CompanyNameProps = {
	mode: 'dark' | 'light'
}

export default function CompanyName({ mode }: CompanyNameProps) {
	const textStyles = 'pr-3 text-[20px] text-right'

	const textVariants = {
		dark: 'text-menuTextDark',
		light: 'text-menuTextLight',
	}

	const lineVariants = {
		dark: 'bg-menuTextDark',
		light: 'bg-menuTextLight',
	}

	return (
		<div className="w-full h-full flex justify-end">
			<div>
				<p className={cn(textStyles, textVariants[mode])}>{App.NAME}</p>
				<p className={cn(textStyles, textVariants[mode])}>{App.SUBNAME}</p>
			</div>
			<div className={cn('w-[2px]', lineVariants[mode])}></div>
		</div>
	)
}
