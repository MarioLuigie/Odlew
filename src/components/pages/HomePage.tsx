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
			<section
				id="home"
				className="h-customScreen p-5 pb-28 flex flex-col justify-end gap-4 homepage-background scroll-mt-header"
			>
				<CompanyName mode="light" className="h-auto" />
				<CustomButton navlink path="/realizacje">
					Zobacz realizacje
				</CustomButton>
			</section>
			<section
				id="o-nas"
				className="min-h-customScreen p-5 flex flex-col bg-background scroll-mt-header"
			>
				<div className="mb-6 flex flex-col text-2xl">
					<p>Kim jesteśmy?</p>
					<p>Co tworzymy?</p>
					<p>Dokąd zmierzamy?</p>
				</div>
				<div className="text-justify mb-8">
					<p>
						Jesteśmy rodzinną firmą zajmującą się odlewnictwem
						artystycznym. Założoną w 2020 roku jako ewolucja trwającej
						ponad 40 lat rzemieślniczej pracy artysty Józefa Polewki,
						który samodzielnie wykonywał i nadal wykonuje odlewy swoich
						prac. Wyróżnia nas w pełni indywidualne podejście do klienta
						oraz dbałość o najwyższą jakość.
					</p>
				</div>
				<CustomButton navlink path="/o-nas">
					Czytaj więcej
				</CustomButton>
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
			</section>
			<section
				id="oferta"
				className="h-customScreen bg-background scroll-mt-header"
			>
				OFFER
			</section>
			<section
				id="realizacje"
				className="h-customScreen bg-background scroll-mt-header"
			>
				REALIZATIONS
			</section>
			<section
				id="kontakt"
				className="h-customScreen bg-background scroll-mt-header"
			>
				CONTACT
			</section>
		</div>
	)
}
