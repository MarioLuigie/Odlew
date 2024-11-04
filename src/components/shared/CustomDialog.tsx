import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

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
			<DialogContent className={cn('border-0', className)}>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	)
}
