// components
import CustomDialog from '@/components/shared/CustomDialog'
import OpinionForm from '@/components/forms/OpinionForm'
import TextVerticalOpinions from '@/components/shared/TextVerticalOpinions'

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
			className="h-full bg-background max-w-full py-0"
			title="Napisz opinię"
			description="Dziękujemy za pozostawienie opini"
		>
			<div className='flex'>
				<div className="w-1/2 max-h-screen bg-[#DAD7D1] flex md:pl-28 xl:pl-36">
					<TextVerticalOpinions right={false}>Opinie klientów</TextVerticalOpinions>
				</div>

				<div className="w-1/2 max-h-screen pt-[70px] px-[110px] pb-[60px] overflow-y-auto hide-scrollbar flex flex-col gap-4 bg-[#DEDCD8]">
					{/* SET OPINION_FORM */}
					<div className='mb-[30px] w-full pb-[7px] border-b-2 border-[#454345]'>
						<p className='text-[36px] font-normal text-[#454345]'>Napisz opinię</p>
					</div>
					<OpinionForm />
				</div>
			</div>
		</CustomDialog>
	)
}
