// components
import CustomDialog from '@/components/shared/CustomDialog'
import OpinionForm from '@/components/forms/OpinionForm'

type CreateOpinionDialogProps = {
	isOpen: boolean
	handleClose: () => void
}

export default function CreateOpinionDialog({
	isOpen,
	handleClose,
}: CreateOpinionDialogProps) {
	return (
		<CustomDialog
			handleClose={handleClose}
			isOpen={isOpen}
			className="h-full p-5 bg-background"
      title='Napisz opinię'
      description='Dziękujemy za pozostawienie opini'
		>
			<div className='max-h-screen overflow-y-auto hide-scrollbar flex flex-col gap-4'>
        {/* SET OPINION_FORM */}
        <OpinionForm />
			</div>
		</CustomDialog>
	)
}
