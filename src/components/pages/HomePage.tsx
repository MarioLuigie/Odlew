'use client'
// modules
import Image from 'next/image'
// lib
import { AboutImages, OfferImages } from '@/lib/constants/images'
//components
import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'
import TextContent from '@/components/pages/TextContent'

export default function HomePage() {
	return (
		<div className="flex flex-col">
			{/* HOME */}
			<section
				id="home"
				className="h-customScreen p-5 pb-28 flex flex-col justify-end gap-4 homepage-background scroll-mt-header"
			>
				<CompanyName mode="light" className="h-auto" />
				<CustomButton navlink path="/realizacje">
					Zobacz realizacje
				</CustomButton>
			</section>

			{/* ABOUT */}
			<section
				id="o-nas"
				className="min-h-customScreen flex flex-col bg-background scroll-mt-header"
			>
				<TextContent
					title={
						<>
							<p>Kim jesteśmy?</p>
							<p>Co tworzymy?</p>
							<p>Dokąd zmierzamy?</p>
						</>
					}
					content={
						<p>
							Jesteśmy rodzinną firmą zajmującą się odlewnictwem
							artystycznym. Założoną w 2020 roku jako ewolucja trwającej
							ponad 40 lat rzemieślniczej pracy artysty Józefa Polewki,
							który samodzielnie wykonywał i nadal wykonuje odlewy swoich
							prac. Wyróżnia nas w pełni indywidualne podejście do
							klienta oraz dbałość o najwyższą jakość.
						</p>
					}
				/>
				<div className="px-5">
					<CustomButton navlink path="/o-nas">
						Czytaj więcej
					</CustomButton>
				</div>
				<div className="mt-12 flex gap-2 overflow-x-auto">
					{AboutImages.map((image, i) => (
						<Image
							key={i}
							src={image.path}
							alt={image.alt}
							width={600}
							height={600}
							priority
							className='w-full'
						/>
					))}
				</div>
				<div className="h-customScreen flex flex-col justify-center items-center bg-mottoBg">
					<div className="flex flex-col justify-center items-center gap-4 text-[32px] text-textLight">
						<p>Są rzeczy trudne</p>
						<p>ale nie niemozliwe</p>
					</div>
				</div>
			</section>

			{/* OFFER */}
			<section
				id="oferta"
				className="min-h-customScreen bg-background scroll-mt-header"
			>
				<TextContent
					title={
						<>
							<p>Co oferujemy</p>
							<p>i dla kogo?</p>
						</>
					}
					content={
						<p>
							Współpracujemy z artystami którzy swoje prace tworzą w
							plastycznym materiale tj wosk, glina, plastelina lub drewno
							a chcą je utrwalić w metalowej postaci. Z każdym kto chce
							mieć coś stworzonego “wyrzeźbionego” przez siebie. Stworzyć
							oryginalny prezent dla bliskiej osoby. Do współpracy
							zachęcamy instytucje kultury, urzędy i organizacje chcące
							upamiętnić ważne wydarzenia lub osoby.
						</p>
					}
				/>
				<div className="px-5">
					<CustomButton navlink path="/oferta">
						Czytaj więcej
					</CustomButton>
				</div>
				<div className="mt-12 flex gap-2 overflow-x-auto">
					{OfferImages.map((image, i) => (
						<Image
							key={i}
							src={image.path}
							alt={image.alt}
							width={600}
							height={600}
							priority
							className='w-full'
						/>
					))}
				</div>
			</section>

			{/* REALIZATIONS */}
			<section
				id="realizacje"
				className="h-customScreen bg-background scroll-mt-header"
			>
				REALIZATIONS
			</section>

			{/* CONTACT */}
			<section
				id="kontakt"
				className="h-customScreen bg-background scroll-mt-header"
			>
				CONTACT
			</section>
		</div>
	)
}
