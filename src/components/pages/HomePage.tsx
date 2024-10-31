'use client'
// lib
import { AboutImages } from '@/lib/constants/images'
//components
import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'
import Image from 'next/image'

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
				<div className="mb-6 px-5 pt-5 flex flex-col text-2xl">
					<p>Kim jesteśmy?</p>
					<p>Co tworzymy?</p>
					<p>Dokąd zmierzamy?</p>
				</div>
				<div className="text-justify mb-8 px-5">
					<p>
						Jesteśmy rodzinną firmą zajmującą się odlewnictwem
						artystycznym. Założoną w 2020 roku jako ewolucja trwającej
						ponad 40 lat rzemieślniczej pracy artysty Józefa Polewki,
						który samodzielnie wykonywał i nadal wykonuje odlewy swoich
						prac. Wyróżnia nas w pełni indywidualne podejście do klienta
						oraz dbałość o najwyższą jakość.
					</p>
				</div>
				<div className='px-5'>
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
						/>
					))}
				</div>
				<div className="h-customScreen flex flex-col justify-center items-center bg-mottoBg">
					<div className='flex flex-col justify-center items-center gap-4 text-[32px] text-menuTextLight'>
						<p>Są rzeczy trudne</p>
						<p>ale nie niemozliwe</p>
					</div>
				</div>
			</section>

			{/* OFFER */}
			<section
				id="oferta"
				className="h-customScreen bg-background scroll-mt-header"
			>
				OFFER
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
