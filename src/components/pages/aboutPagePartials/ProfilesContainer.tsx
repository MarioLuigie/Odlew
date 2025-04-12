'use client'
// modules
import Image from 'next/image'
import { useState } from 'react'
// lib
import { AboutImages } from '@/lib/constants/images'
// components
// import TextContent from '@/components/shared/TextContent'
import JozefProfile from '@/components/pages/aboutPagePartials/JozefProfile'
import SzymonProfile from '@/components/pages/aboutPagePartials/SzymonProfile'
import AntoniProfile from '@/components/pages/aboutPagePartials/AntoniProfile'
import UserProfileDialog from '@/components/dialogs/UserProfileDialog'
import TextVerticalTeam from '@/components/shared/TextVerticalTeam'

type ProfileType = 'Jozef' | 'Szymon' | 'Antoni' | null

export default function ProfilesContainer() {
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
	const [selectedProfile, setSelectedProfile] = useState<ProfileType>(null)

	const handleOpenDialog = (profile: ProfileType) => {
		setSelectedProfile(profile)
		setIsDialogOpen(true)
	}

	const handleCloseDialog = () => {
		setIsDialogOpen(false)
		setSelectedProfile(null)
	}

	const renderProfile = () => {
		switch (selectedProfile) {
			case 'Jozef':
				return <JozefProfile />
			case 'Szymon':
				return <SzymonProfile />
			case 'Antoni':
				return <AntoniProfile />
			default:
				return null
		}
	}

	return (
		<div>
			<div className="bg-background flex flex-col">
				{/* MAIN IMAGE */}
				<div className="lg:h-[720px] xl:h-[720px] 2xl:h-[940px] overflow-hidden">
					<Image
						src={AboutImages.team.path}
						alt={AboutImages.team.alt}
						width={2400}
						height={2400}
						className="w-full h-full object-cover lg:object-[60%_80%] xl:object-[0%_78%]" // <-- to manipulujesz!
					/>
				</div>

				{/* PROFILE IMAGES */}
				<div className="bg-menuTopBg">
					<div className="flex justify-between lg:pl-[40px] xl:pl-[135px]">
						<div
							className="relative w-[368px] h-[552px] mt-[80px] md:w-110 md:h-110 cursor-pointer"
							onClick={() => handleOpenDialog('Szymon')}
						>
							<Image
								src={AboutImages.szymon.path}
								alt={AboutImages.szymon.alt}
								width={2400}
								height={2400}
								className="md:object-cover w-full h-full object-[59%_90%]"
							/>
							<div className="absolute -bottom-[200px] left-[240px]">
								<p className='w-[550px] text-[42px] font-normal text-[#DEDCD8]'>
									Dzięki więzom rodzinnym, w pracy doskonale się
									rozumiemy a współpraca opiera się na wzajemnym
									zaufaniu.
								</p>
							</div>
						</div>
						<div className="flex justify-end">
							<div
								className="w-[300px] h-[300px] mt-[150px] md:w-110 md:h-110 cursor-pointer lg:mr-[80px] xl:mr-[130px]"
								onClick={() => handleOpenDialog('Antoni')}
							>
								<Image
									src={AboutImages.antoni.path}
									alt={AboutImages.antoni.alt}
									width={2400}
									height={2400}
									className="md:object-cover w-full h-full object-[20%_50%]"
								/>
							</div>
							<TextVerticalTeam>Nasz Zespół</TextVerticalTeam>
						</div>
					</div>

					<div className="w-full h-full my-8 flex justify-end">
						<div
							className="w-[460px] h-[370px] md:w-110 md:h-110 cursor-pointer lg:mr-[60px] xl:mr-[40px]"
							onClick={() => handleOpenDialog('Jozef')}
						>
							<Image
								src={AboutImages.jozef.path}
								alt={AboutImages.jozef.alt}
								width={2400}
								height={2400}
								className="md:object-cover h-full"
							/>
						</div>
					</div>
				</div>

				{isDialogOpen && (
					<UserProfileDialog
						isOpen={isDialogOpen}
						handleClose={handleCloseDialog}
					>
						{renderProfile()}
					</UserProfileDialog>
				)}
			</div>
		</div>
	)
}
