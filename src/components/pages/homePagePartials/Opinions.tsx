'use client'
// modules
import { useState } from 'react'
// components
import OpinionsCarouselList from '@/components/content/OpinionsCarouselList'
import CustomButton from '@/components/shared/CustomButton'
import Title from '@/components/shared/Title'
import CreateOpinionDialog from '@/components/dialogs/CreateOpinionDialog'

export default function Opinions() {
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
				<OpinionsCarouselList />
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
