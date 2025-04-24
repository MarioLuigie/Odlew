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
			className="h-full w-full max-w-[1920px] p-5 md:p-0 bg-background"
		>
			<div className="max-h-screen overflow-y-auto hide-scrollbar flex flex-col gap-4">
				{/* RENDERED PROFILE */}
				{children}
			</div>
		</CustomDialog>
	)
}
