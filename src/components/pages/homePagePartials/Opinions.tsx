'use client'
// modules
import { useState } from 'react'
// lib
import { IOpinion } from '@/lib/models/opinion.model'
// components
import OpinionsCarouselList from '@/components/content/OpinionsCarouselList'
import CustomButton from '@/components/shared/CustomButton'
import Title from '@/components/shared/Title'
import CreateOpinionDialog from '@/components/dialogs/CreateOpinionDialog'

export default function Opinions({
	opinions,
}: {
	opinions: IOpinion[] | undefined
}) {
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

	const handleOpenDialog = () => {
		setIsDialogOpen(true)
	}

	const handleCloseDialog = () => {
		setIsDialogOpen(false)
	}

	return (
		<div>
			<Title className="mb-12 px-5">
				<p>Opinie klientów</p>
			</Title>

			<div className="w-full flex justify-center">
				<OpinionsCarouselList opinions={opinions} />
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
	)
}
