// modules
import Image from 'next/image'
// lib
import { HomeOfferImages } from '@/lib/constants/images'
// components
import CustomButton from '@/components/shared/CustomButton'
import ImagesVerticalLine from '@/components/shared/ImagesVerticalLine'

export default function Offer() {
	return (
		<section id="oferta" className="bg-background pt-24 scroll-mt-header">
			<div className="lg:flex lg:flex-col md:min-h-customScreen">
				{/* TOP SECTION */}
				<div className="lg:flex lg:min-h-[820px] pb-10">
					{/* TEXT CONTAINER*/}
					<div className="lg:w-6/12 xl:w-7/12 pr-16 lg:pl-[60px] xl:pl-[135px]">
						<div className='flex flex-col justify-center h-full'>
							<p className="text-[50px] font-normal text-[#383638]">
								Co oferujemy i dla kogo?
							</p>
							<p className="text-lg font-medium text-[#383638]">
								Współpracujemy z artystami, którzy swoje prace tworzą w
								plastycznym materiale tj. wosk, glina, plastelina lub
								drewno, a chcą je utrwalić w metalowej postaci. Z każdym
								kto chce mieć coś stworzonego - “wyrzeźbionego” przez
								siebie. Stworzyć oryginalny prezent dla bliskiej osoby.
								Do współpracy zachęcamy instytucje kultury, urzędy i
								organizacje, chcące upamiętnić ważne wydarzenia lub
								osoby.
							</p>
							<div className="px-5 my-12">
								<CustomButton navlink path="/oferta">
									Czytaj więcej
								</CustomButton>
							</div>
						</div>
					</div>

					{/* IMAGES CONTAINER*/}
					<div className="grow">
						<ImagesVerticalLine>dffghnghnnt</ImagesVerticalLine>
					</div>
				</div>

				{/* BOTTOM SECTION */}
				<div className="lg:pr-[120px] xl:pr-[300px]">
					{HomeOfferImages.map((image, i) => (
						<Image
							key={i}
							src={image.path}
							alt={image.alt}
							width={2400}
							height={2400}
							priority
							className="w-auto object-cover"
						/>
					))}
				</div>
			</div>
		</section>
	)
}
