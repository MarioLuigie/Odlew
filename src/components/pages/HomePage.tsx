'use client'

//components
import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'

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
				className="h-customScreen p-5 bg-background scroll-mt-header"
			>
				<div className='mb-6 flex flex-col text-2xl'>
					<p>Kim jesteśmy?</p>
					<p>Co tworzymy?</p>
					<p>Dokąd zmierzamy?</p>
				</div>
				<div className='text-justify'>
					<p>Jesteśmy rodzinną firmą zajmującą się odlewnictwem artystycznym. Założoną w 2020 roku jako ewolucja trwającej ponad 40 lat rzemieślniczej pracy artysty Józefa Polewki, który samodzielnie wykonywał i nadal wykonuje odlewy swoich prac. Wyróżnia nas w pełni indywidualne podejście do klienta oraz dbałość o najwyższą jakość.</p>
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
