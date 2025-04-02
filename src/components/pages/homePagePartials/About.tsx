'use client'
// modules
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'

// lib
import { HomeAboutImages } from '@/lib/constants/images'
// components
import CustomButton from '@/components/shared/CustomButton'
import TextContent from '@/components/shared/TextContent'
import Title from '@/components/shared/Title'

export default function About() {
	return (
		<section
			id="o-nas"
			className="flex flex-col bg-background scroll-mt-header"
		>
			<div className="dp:h-customScreen dp:max-h-[820px] dp:flex dp:justify-between pr-[72px]">
				{/* TEXT */}
				<div className="textPageContainer">
					<div className="min-w-[250px] max-w-[600px]">
						<Title className="titlePage">
							<p className="dp:hidden">Kim jesteśmy?</p>
							<div className="hidden dp:block">
								<p>Kim jesteśmy?</p>
								<p>Co tworzymy?</p>
								<p>Dokąd zmierzamy?</p>
							</div>
						</Title>
						<TextContent className="px-5 dp:text-[18px]">
							<p>
								Jesteśmy rodzinną firmą zajmującą się odlewnictwem
								artystycznym. Założoną w 2020 roku jako ewolucja
								trwającej ponad 40 lat rzemieślniczej pracy artysty
								Józefa Polewki, który samodzielnie wykonywał i nadal
								wykonuje odlewy swoich prac. Wyróżnia nas w pełni
								indywidualne podejście do klienta oraz dbałość o
								najwyższą jakość.
							</p>
						</TextContent>
						<div className="px-5 mt-6 dp:mt-12">
							<CustomButton navlink path="/o-nas">
								Czytaj więcej
							</CustomButton>
						</div>
					</div>
				</div>

				{/* IMAGES */}
				<div className="dp:bg-background">
					{/* <div className="mt-12 dp:mt-0 flex gap-2 dp:gap-6 overflow-x-auto dp:flex-col dp:justify-start dp:overflow-y-auto dp:max-h-customScreen" style={{ direction: 'rtl' }}>
						{HomeAboutImages.map((image, i) => (
							<Image
								key={i}
								src={image.path}
								alt={image.alt}
								width={2400}
								height={2400}
								priority
								className="w-[450px] object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer"
								style={{ willChange: "filter" }}
							/>
						))}
					</div> */}

					<div>
						<ScrollArea className="hidden dp:flex dp:h-[820px] rounded-none border-l-[2px]">
							<div className="flex flex-col gap-6 items-end">
								{HomeAboutImages.map((image, i) => (
									<Image
										key={i}
										src={image.path}
										alt={image.alt}
										width={2400}
										height={2400}
										priority
										className="min-w-[250px] max-w-[500px] w-[85%] object-cover grayscale contrast-75 hover:grayscale-0 hover:contrast-100 transition duration-500 ease-in-out cursor-pointer"
										style={{
											willChange: 'filter',
										}}
									/>
								))}
							</div>
						</ScrollArea>
					</div>
				</div>
			</div>
		</section>
	)
}
