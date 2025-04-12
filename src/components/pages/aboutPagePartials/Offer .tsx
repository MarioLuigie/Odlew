// modules
import Image from 'next/image'
// lib
import { HomeOfferImages } from '@/lib/constants/images'
// components
import CustomButton from '@/components/shared/CustomButton'
import ImagesVerticalLine from '@/components/shared/ImagesVerticalLine'

export default function Offer() {
	return (
		<section
			id="oferta"
			className="bg-background pt-24 scroll-mt-header"
		>
			<div className="lg:flex lg:flex-col md:min-h-customScreen">
				{/* TOP SECTION */}
				<div className="lg:flex lg:min-h-[820px] pb-10">
					{/* TEXT CONTAINER*/}
					<div className="w-7/12">
						<p className="text-[54px] font-normal text-[#383638]">
							Co oferujemy i dla kogo?
						</p>
						<p className="text-lg font-medium text-[#383638]">
							Współpracujemy z artystami, którzy swoje prace tworzą w
							plastycznym materiale tj. wosk, glina, plastelina lub
							drewno, a chcą je utrwalić w metalowej postaci. Z każdym
							kto chce mieć coś stworzonego - “wyrzeźbionego” przez
							siebie. Stworzyć oryginalny prezent dla bliskiej osoby. Do
							współpracy zachęcamy instytucje kultury, urzędy i
							organizacje, chcące upamiętnić ważne wydarzenia lub osoby.
						</p>
						<div className="px-5 my-12">
							<CustomButton navlink path="/oferta">
								Czytaj więcej
							</CustomButton>
						</div>
					</div>

					{/* IMAGES CONTAINER*/}
					<div className='bg-yellow-400 grow'>
						<ImagesVerticalLine>dffghnghnnt</ImagesVerticalLine>
					</div>
				</div>

				{/* BOTTOM SECTION */}
				<div className="flex gap-2 overflow-x-auto">
					{HomeOfferImages.map((image, i) => (
						<Image
							key={i}
							src={image.path}
							alt={image.alt}
							width={2400}
							height={2400}
							priority
							className="h-customScreen w-auto object-cover"
						/>
					))}
				</div>
			</div>
		</section>
	)
}
