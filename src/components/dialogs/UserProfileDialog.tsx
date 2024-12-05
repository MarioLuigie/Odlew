// components
import CustomDialog from '@/components/shared/CustomDialog'

type CreateOpinionDialogProps = {
	isOpen: boolean
	handleClose: () => void
	children?: React.ReactNode
}

export default function UserProfileDialog({
	isOpen,
	handleClose,
	children,
}: CreateOpinionDialogProps) {
	return (
		<CustomDialog
			handleClose={handleClose}
			isOpen={isOpen}
			className="h-full dp:max-w-full p-5 bg-background"
			title="Napisz opinię"
			description="Dziękujemy za pozostawienie opini"
		>
			<div className="max-h-screen overflow-y-auto hide-scrollbar flex flex-col gap-4">
				{/* SET OPINION_FORM */}
				{children}
			</div>
		</CustomDialog>
	)
}
