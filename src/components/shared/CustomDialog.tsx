// modules
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
// lib
import { cn } from '@/lib/utils'
// components
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

type CustomDialogProps = {
	children: React.ReactNode
	title?: string
	description?: string
	handleClose: () => void
	isOpen: boolean
	className?: string
}

export default function CustomDialog({
	children,
	title,
	description,
	handleClose,
	isOpen,
	className,
}: CustomDialogProps) {
	return (
		<Dialog open={isOpen} onOpenChange={handleClose}>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent className={cn('border-0 px-0', className)}>
				{title || description ? (
					<DialogHeader className="text-left mt-8 dp:mt-0 dp:bg-yellow-400">
						{title ? (
							<DialogTitle>{title}</DialogTitle>
						) : (
							<VisuallyHidden>
								<DialogTitle>
									To okno modalne nie ma określonego tytułu.
								</DialogTitle>
							</VisuallyHidden>
						)}
						{description ? (
							<DialogDescription>{description}</DialogDescription>
						) : (
							<VisuallyHidden>
								<DialogDescription>
									To okno modalne nie ma określonego opisu.
								</DialogDescription>
							</VisuallyHidden>
						)}
					</DialogHeader>
				) : (
					<VisuallyHidden>
						<DialogHeader className="text-left mt-8 dp:mt-0 dp:bg-yellow-400">
							<DialogTitle>
								To okno modalne nie ma określonego tytułu.
							</DialogTitle>
							<DialogDescription>
								To okno modalne nie ma określonego opisu.
							</DialogDescription>
						</DialogHeader>
					</VisuallyHidden>
				)}

				{children}
			</DialogContent>
		</Dialog>
	)
}
