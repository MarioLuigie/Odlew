// components
import CustomDialog from '@/components/shared/CustomDialog'

type CreateOpinionDialogProps = {
	isOpen: boolean
	handleClose: () => void
}

export default function CreateOpinionDialog({
	isOpen,
	handleClose,
}: CreateOpinionDialogProps) {
	return (
		<CustomDialog handleClose={handleClose} isOpen={isOpen} className='h-full bg-background'>
			<div>Opinion Dialog</div>
		</CustomDialog>
	)
}
