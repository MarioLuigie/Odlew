// modules
import Image from 'next/image'
// lib
import { HomeOfferImages } from '@/lib/constants/images'
// components
import CustomButton from '@/components/shared/CustomButton'
import TextContent from '@/components/shared/TextContent'
import Title from '@/components/shared/Title'

export default function Offer() {
	return (
		<section
			id="oferta"
			className="min-h-customScreen bg-background scroll-mt-header border-b-[1px] border-zinc-400"
		>
			<div className="md:flex md:min-h-customScreen">
				<div className="md:w-1/2 textPageContainer">
					<div>
						<Title className="titlePage">
							<p>Co oferujemy</p>
							<p>i dla kogo?</p>
						</Title>
						<TextContent className="px-5 md:text-lg">
							<p>
								Współpracujemy z artystami, którzy swoje prace tworzą w
								plastycznym materiale tj. wosk, glina, plastelina lub
								drewno, a chcą je utrwalić w metalowej postaci. Z każdym
								kto chce mieć coś stworzonego - “wyrzeźbionego” przez
								siebie. Stworzyć oryginalny prezent dla bliskiej osoby.
								Do współpracy zachęcamy instytucje kultury, urzędy i
								organizacje, chcące upamiętnić ważne wydarzenia lub
								osoby.
							</p>
						</TextContent>
						<div className="px-5 my-12">
							<CustomButton navlink path="/oferta">
								Czytaj więcej
							</CustomButton>
						</div>
					</div>
				</div>
				<div className="md:w-1/2 md:bg-backgroundDark">
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
			</div>
		</section>
	)
}
