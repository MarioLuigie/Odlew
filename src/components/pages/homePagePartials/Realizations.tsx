// components
import CustomButton from '@/components/shared/CustomButton'
import Title from '@/components/shared/Title'
import { MoveLeft } from 'lucide-react'
import Image from 'next/image'
import { ProductImages } from '@/lib/constants/images'

export default function Realizations() {
	return (
		<section id="realizacje" className="">
			<div className="h-[32px] bg-[#DEDCD8] w-full"></div>
			<div className="md:relative w-full md:min-h-[790px] md:flex md:justify-center md:items-stretch bg-background scroll-mt-header">
				{/*LEFT SIDE*/}
				<div className="w-1/2 bg-[#DEDCD8] md:relative flex">
					<div className="w-[180px] h-[180px] md:absolute md:right-[10px] md:top-0">
						<Image
							src={ProductImages[7].image.path}
							alt={ProductImages[7].image.alt}
							fill
							className="w-full h-full object-cover transform transition-all duration-300 hover:scale-110 hover:shadow-zinc-500 hover:shadow-lg"
						/>
					</div>

					{/* 3 PHOTOS WITH ABSOLUTE POSITION */}
					<div className="md:absolute md:top-[160px] md:left-[40px] 2xl:left-[140px] 3xl:left-[200px] w-[230px] h-[180px]">
						<Image
							src={ProductImages[10].image.path}
							alt={ProductImages[10].image.alt}
							fill
							className="w-full h-full object-cover transform transition-all duration-300 hover:scale-110 hover:shadow-zinc-400 hover:shadow-lg hover:z-40"
						/>
					</div>

					<div className="md:absolute md:top-[320px] md:left-[150px] 2xl:left-[250px] 3xl:left-[310px] w-[300px] h-[400px]">
						<Image
							src={ProductImages[1].image.path}
							alt={ProductImages[1].image.alt}
							fill
							className="w-full h-full object-cover transform transition-all duration-300 hover:scale-110 hover:shadow-zinc-400 hover:shadow-lg hover:z-40"
						/>
					</div>

					<div className="flex flex-col md:absolute z-30 md:-bottom-[80px] md:left-[410px] 2xl:left-[510px] 3xl:left-[570px]">
						<div className="w-[180px] h-[180px] border-neutral-950 border-2 relative">
							<Image
								src={ProductImages[2].image.path}
								alt={ProductImages[2].image.alt}
								fill
								className="w-full h-full object-cover transform transition-all duration-300 hover:scale-110 hover:shadow-zinc-500 hover:shadow-lg"
							/>
						</div>
						<div className="pt-2">
							<div className="flex items-center">
								<p className="text-[#454345] text-sm font-medium">
									Józef Polewka
								</p>
								<MoveLeft className="text-[#454345] ml-2 mt-[3px]" />
							</div>
							<p className="text-[#817D78] text-xs font-medium leading-[12px]">
								Cwaniara
							</p>
						</div>
					</div>
				</div>

				{/*RIGHT SIDE*/}
				<div className="w-1/2 md:relative bg-[#DEDCD8]">
					<div className="w-[400px] h-[300px] md:absolute md:right-[40px] 2xl:right-[140px] 3xl:right-[200px] md:top-[55px]">
						<Image
							src={ProductImages[11].image.path}
							alt={ProductImages[11].image.alt}
							fill
							className="w-full h-full object-cover transform transition-all duration-300 hover:scale-110 hover:shadow-zinc-600 hover:shadow-lg hover:z-40"
						/>
					</div>

					<div className="md:absolute md:top-[315px] md:right-[255px] 2xl:right-[355px] 3xl:right-[415px] w-[230px] h-[290px]">
						<Image
							src={ProductImages[9].image.path}
							alt={ProductImages[9].image.alt}
							fill
							className="w-full h-full object-cover object-[50%_75%] transform transition-all duration-300 hover:scale-110 hover:shadow-zinc-400 hover:shadow-lg hover:z-40"
						/>
					</div>

					<div className="md:absolute md:bottom-[80px] md:right-[95px] 2xl:right-[195px] 3xl:right-[255px] w-[180px] h-[180px]">
						<Image
							src={ProductImages[3].image.path}
							alt={ProductImages[3].image.alt}
							fill
							className="w-full h-full object-cover transform transition-all duration-300 hover:scale-110 hover:shadow-zinc-400 hover:shadow-lg"
						/>
					</div>
				</div>

				{/* MIDDLE TITLE */}
				<div className="z-40 md:absolute md:inset-0 md:flex md:justify-center md:items-center pointer-events-none">
					{/* desktop */}
					<div className="flex flex-col justify-center items-center bg-transparent">
						<Title className="titlePage md:text-[54px]">
							<div className="flex flex-col justify-center items-center 3xl:text-7xl text-[#383638]">
								<p>Nasze</p>
								<p>realizacje</p>
							</div>
						</Title>
						<div className="px-5 my-12 md:my-0 md:flex md:justify-center md:items-center md:w-full hidden pointer-events-auto">
							<CustomButton navlink path="/realizacje">
								Zobacz więcej
							</CustomButton>
						</div>
					</div>
					{/* Mobile */}
					<div className="px-5 my-12 md:hidden pointer-events-auto">
						<CustomButton navlink path="/realizacje">
							Zobacz więcej
						</CustomButton>
					</div>
				</div>
			</div>
			<div className="h-[100px] bg-[#DAD7D1] w-full"></div>
		</section>
	)
}

//copy
// // modules
// import Image from 'next/image'
// // lib
// import { HomeProductImages } from '@/lib/constants/images'
// // components
// import CustomButton from '@/components/shared/CustomButton'
// import TextContent from '@/components/shared/TextContent'
// import Title from '@/components/shared/Title'

// export default function Realizations() {

// 	return (
// 		<section
// 			id="realizacje"
// 			className="min-h-customScreen bg-background scroll-mt-header"
// 		>
// 			<div className="md:flex md:flex-col md:min-h-customScreen">
// 				<div className='md:flex border-b-[1px] border-zinc-400 md:max-h-customScreen'>
// 					<div className="md:w-1/2 textPageContainer">
// 						<div>
// 							<Title className="titlePage">
// 								<p>Nasze realizacje</p>
// 								<p>i ich znaczenie</p>
// 							</Title>
// 							<TextContent className="px-5 md:text-lg">
// 								<p>
// 									Nasze realizacje to nie tylko dzieła sztuki, ale
// 									także wyjątkowe projekty, które łączą pasję z
// 									rzemiosłem. Pracujemy nad różnorodnymi realizacjami,
// 									od indywidualnych zleceń po większe projekty
// 									artystyczne i kulturalne. Współpraca z artystami oraz
// 									klientami pozwala nam tworzyć niepowtarzalne dzieła,
// 									które mają swoje miejsce w galeriach, instytucjach
// 									oraz prywatnych kolekcjach.
// 								</p>
// 							</TextContent>
// 							<div className="px-5 my-12 md:block hidden">
// 								<CustomButton navlink path="/realizacje">
// 									Zobacz więcej
// 								</CustomButton>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="md:w-1/2 md:bg-backgroundDark md:flex md:justify-center md:items-center overflow-hidden">
// 						<div className="mt-12 md:mt-0 flex flex-col gap-1">
// 							{HomeProductImages.slice(1, 2).map((image, i) => (
// 								<Image
// 									key={i}
// 									src={image.path}
// 									alt={image.alt}
// 									width={2400}
// 									height={2400}
// 									priority
// 									className="w-full mx-auto"
// 								/>
// 							))}
// 						</div>

// 						<div className="px-5 my-12 md:hidden">
// 							<CustomButton navlink path="/realizacje">
// 								Zobacz więcej
// 							</CustomButton>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
