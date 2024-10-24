// modules
import clsx from 'clsx'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
// components
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

type CustomSheetProps = {
	children: React.ReactNode
	side?: 'left' | 'right' | 'top' | 'bottom'
	title?: string
	description?: string
	trigger?: React.ReactNode | string
	className?: string
}

export default function CustomSheet({
	children,
	side = 'left',
	title,
	description,
	trigger = 'Open',
	className,
}: CustomSheetProps) {
	return (
		<Sheet>
			<SheetTrigger>{trigger ? trigger : <p className='text-white'>{trigger}</p>}</SheetTrigger>
			<SheetContent side={side} className={clsx(className)}>
				<SheetHeader>
					{title ? (
						<SheetTitle className="text-textPrimary">{title}</SheetTitle>
					) : (
						<VisuallyHidden>
							<SheetTitle>This sheet has no visible title.</SheetTitle>
						</VisuallyHidden>
					)}

					{description ? (
						<SheetDescription className="pb-2">
							{description}
						</SheetDescription>
					) : (
						<VisuallyHidden>
							<SheetDescription>
								This sheet has no visible description.
							</SheetDescription>
						</VisuallyHidden>
					)}
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	)
}