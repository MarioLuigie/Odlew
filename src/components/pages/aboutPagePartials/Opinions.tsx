'use client'
// modules
import { useState } from 'react'
// lib
import { IOpinion } from '@/lib/models/opinion.model'
// components
import OpinionsCarouselList from '@/components/content/OpinionsCarouselList'
import CustomButton from '@/components/shared/CustomButton'
import CreateOpinionDialog from '@/components/dialogs/CreateOpinionDialog'
import TextVerticalOpinions from '@/components/shared/TextVerticalOpinions'

export default function Opinions({
	opinions,
	isAdmin,
}: {
	opinions: IOpinion[] | undefined
	isAdmin: boolean
}) {
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
	// console.log(opinions)

	const handleOpenDialog = () => {
		setIsDialogOpen(true)
	}

	const handleCloseDialog = () => {
		setIsDialogOpen(false)
	}

	return (
		<div className="md:flex md:min-h-customScreen">
			<div className="xl:w-1/2 flex md:bg-background md:pl-28 xl:pl-36">
				<TextVerticalOpinions right={false}>Opinie klientów</TextVerticalOpinions>
			</div>
			<div className="md:w-1/2 textPageContainer">
				<div>
					<div className="w-full flex justify-center">
						<OpinionsCarouselList opinions={opinions} isAdmin={isAdmin} />
					</div>

					<div className="px-5 my-12">
						<CustomButton onClick={handleOpenDialog}>
							Napisz opinię
						</CustomButton>

						{isDialogOpen && (
							<CreateOpinionDialog
								isOpen={isDialogOpen}
								handleClose={handleCloseDialog}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
