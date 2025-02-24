// components
import Offer from '@/components/pages/aboutPagePartials/Offer '
import OpinionsContainer from '@/components/pages/aboutPagePartials/OpinionsContainer'
import ProfilesContainer from '@/components/pages/aboutPagePartials/ProfilesContainer'


export default function AboutPage() {

	return (
		<div>
			<ProfilesContainer />
			<Offer />
			<OpinionsContainer />
		</div>
	)
}

// 'use client'
// // modules
// import Image from 'next/image'
// import { useState } from 'react'
// // lib
// import { AboutImages } from '@/lib/constants/images'
// // components
// import TextContent from '@/components/shared/TextContent'
// import Title from '@/components/shared/Title'
// import JozefProfile from '@/components/pages/aboutPagePartials/JozefProfile'
// import SzymonProfile from '@/components/pages/aboutPagePartials/SzymonProfile'
// import AntoniProfile from '@/components/pages/aboutPagePartials/AntoniProfile'
// import UserProfileDialog from '@/components/dialogs/UserProfileDialog'

// export default function AboutPage() {
// 	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

// 	const handleOpenDialog = () => {
// 		setIsDialogOpen(true)
// 	}

// 	const handleCloseDialog = () => {
// 		setIsDialogOpen(false)
// 	}

// 	return (
// 		<div className="min-h-customScreen bg-background">
// 			<Image
// 				src={AboutImages.team.path}
// 				alt={AboutImages.team.alt}
// 				width={2400}
// 				height={2400}
// 				className="w-full"
// 			/>
// 			<div className="bg-menuTopBg p-5 pb-10">
// 				<Title className="text-textLight pb-5">Nasz Zespół</Title>
// 				<TextContent className="text-textLight">
// 					Dzięki więzom rodzinnym nasz zespół doskonale się rozumie, co
// 					przekłada się na efektywną i harmonijną współpracę. Fundamentem
// 					naszych działań jest wzajemne zaufanie, które pozwala nam
// 					podejmować wspólne decyzje z pełnym przekonaniem. Szanujemy
// 					nawzajem swoje pomysły i perspektywy, co wzmacnia naszą relację
// 					zawodową. Taka atmosfera sprzyja tworzeniu wyjątkowych projektów
// 					i osiąganiu wspólnych celów.
// 				</TextContent>
// 			</div>
// 			<div
// 				className="w-40 h-40 bg-red-400 border-2 border-red-700 cursor-pointer"
// 				onClick={handleOpenDialog}
// 			>
// 				LINK TO PROFILE DETAILS
// 			</div>
// 			{isDialogOpen && (
// 				<UserProfileDialog
// 					isOpen={isDialogOpen}
// 					handleClose={handleCloseDialog}
// 				/>
// 			)}
// 			<JozefProfile />
// 			<SzymonProfile />
// 			<AntoniProfile />
// 		</div>
// 	)
// }

// {
// 	/* WORKING PROCESS - HOW DO WE WORK? */
// }
