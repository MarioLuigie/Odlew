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
	trigger?: React.ReactNode
	title?: string
	description?: string
}

export default function CustomDialog({
	children,
	trigger,
	title,
	description,
}: CustomDialogProps) {
	return (
		<Dialog>
			<DialogTrigger>{trigger || 'Open'}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	)
}
