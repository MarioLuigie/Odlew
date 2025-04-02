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
import TextContent from '@/components/shared/TextContent'

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
			<div className="md:w-1/2 md:bg-backgroundDark textPageContainer">
				<div>
					<Title className="mb-12 px-5 hidden md:flex md:text-[55px] md:font-normal titlePage">
						<p>Opinie klientów</p>
					</Title>
					<TextContent className="px-5 md:text-lg hidden md:block">
						<p>
							Dziękujemy, że wybraliście naszą ofertę! Wasza opinia jest
							dla nas niezwykle cenna i pomaga nam stale się rozwijać, by
							lepiej spełniać Wasze oczekiwania. Jeśli jesteście
							zadowoleni z naszych usług, podzielcie się swoją opinią na
							naszej stronie - zajmie to tylko chwilę, a dla nas znaczy
							naprawdę wiele. Każda recenzja to nie tylko wsparcie, ale
							także motywacja do dalszego działania. Dziękujemy za
							poświęcony czas i zaufanie!
						</p>
					</TextContent>
				</div>
			</div>
			<div className="md:w-1/2 textPageContainer">
				<div>
					<Title className="mb-12 px-5 md:hidden">
						<p>Opinie klientów</p>
					</Title>

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
