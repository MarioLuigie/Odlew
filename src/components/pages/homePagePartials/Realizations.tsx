// components
import CustomButton from '@/components/shared/CustomButton'
import Title from '@/components/shared/Title'

export default function Realizations() {
	return (
		<section
			id="realizacje"
			className="w-full dp:min-h-sectionHeight dp:flex dp:justify-center dp:items-stretch bg-background scroll-mt-header dp:relative"
		>
			{/*LEFT SIDE*/}
			<div className="w-1/2 bg-yellow-300 dp:relative flex">
				<div className="w-[180px] h-[180px] border-neutral-950 border-2 dp:absolute dp:right-0 dp:top-0">
					product-15.jpg
				</div>

				{/* 3 PHOTOS WITH ABSOLUTE POSITION */}
				<div className="dp:absolute dp:top-[170px] dp:left-[40px] w-[230px] h-[180px] border-neutral-950 border-2">
					product-11.jpg
				</div>

				<div className="dp:absolute dp:top-[320px] dp:left-[150px] w-[300px] h-[400px] border-neutral-950 border-2">
					product-17.jpg
				</div>

				<div className="dp:absolute dp:bottom-0 dp:left-[410px] w-[180px] h-[180px] border-neutral-950 border-2">
					product-13.jpg
				</div>
			</div>

			{/*RIGHT SIDE*/}
			<div className="w-1/2 bg-green-300">

				<div className="w-[400px] h-[300px] border-neutral-950 border-2 dp:absolute dp:right-[40px] dp:top-[55px]">
					product-14.jpg
				</div>

				<div className="dp:absolute dp:top-[310px] dp:right-[245px] w-[230px] h-[290px] border-neutral-950 border-2">
					product-12.jpg
				</div>

				<div className="dp:absolute dp:bottom-[110px] dp:right-[90px] w-[180px] h-[180px] border-neutral-950 border-2">
					product-16.jpg
				</div>

			</div>

			{/* Our realizations title */}
			<div className="dp:absolute dp:inset-0 dp:flex dp:justify-center dp:items-center">
				{/* desktop */}
				<div className="flex flex-col justify-center items-center bg-transparent">
					<Title className="titlePage">
						<div className="flex flex-col justify-center items-center">
							<p>Nasze</p>
							<p>realizacje</p>
						</div>
					</Title>
					<div className="px-5 my-12 dp:my-0 dp:flex dp:justify-center dp:items-center dp:w-full hidden">
						<CustomButton navlink path="/realizacje">
							Zobacz więcej
						</CustomButton>
					</div>
				</div>
				{/* Mobile */}
				<div className="px-5 my-12 dp:hidden">
					<CustomButton navlink path="/realizacje">
						Zobacz więcej
					</CustomButton>
				</div>
			</div>
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
// 			<div className="dp:flex dp:flex-col dp:min-h-customScreen">
// 				<div className='dp:flex border-b-[1px] border-zinc-400 dp:max-h-customScreen'>
// 					<div className="dp:w-1/2 textPageContainer">
// 						<div>
// 							<Title className="titlePage">
// 								<p>Nasze realizacje</p>
// 								<p>i ich znaczenie</p>
// 							</Title>
// 							<TextContent className="px-5 dp:text-lg">
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
// 							<div className="px-5 my-12 dp:block hidden">
// 								<CustomButton navlink path="/realizacje">
// 									Zobacz więcej
// 								</CustomButton>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="dp:w-1/2 dp:bg-backgroundDark dp:flex dp:justify-center dp:items-center overflow-hidden">
// 						<div className="mt-12 dp:mt-0 flex flex-col gap-1">
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

// 						<div className="px-5 my-12 dp:hidden">
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
