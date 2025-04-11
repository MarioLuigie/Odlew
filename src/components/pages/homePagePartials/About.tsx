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
			<div className="md:h-customScreen md:max-h-[820px] md:flex md:justify-between pr-[72px]">
				{/* TEXT */}
				<div className="textPageContainer">
					<div className="min-w-[250px] max-w-[600px]">
						<Title className="titlePage">
							<p className="md:hidden">Kim jesteśmy?</p>
							<div className="hidden md:block">
								<p>Kim jesteśmy?</p>
								<p>Co tworzymy?</p>
								<p>Dokąd zmierzamy?</p>
							</div>
						</Title>
						<TextContent className="px-5 md:text-[18px]">
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
						<div className="px-5 mt-6 md:mt-12">
							<CustomButton navlink path="/o-nas">
								Czytaj więcej
							</CustomButton>
						</div>
					</div>
				</div>

				{/* IMAGES */}
				<div className="md:bg-background">
					{/* <div className="mt-12 md:mt-0 flex gap-2 md:gap-6 overflow-x-auto md:flex-col md:justify-start md:overflow-y-auto md:max-h-customScreen" style={{ direction: 'rtl' }}>
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
						<ScrollArea className="hidden md:flex md:h-[820px] rounded-none border-l-[2px]">
							<div className="flex flex-col gap-6 items-end min-w-[300px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[650px]">
								{HomeAboutImages.map((image, i) => (
									<div key={i} className='lg:w-[80%] xl:w-[80%]'>
										<Image
											key={i}
											src={image.path}
											alt={image.alt}
											width={2400}
											height={2400}
											priority
											className="object-cover grayscale contrast-75 hover:grayscale-0 hover:contrast-100 transition duration-500 ease-in-out cursor-pointer"
											style={{
												willChange: 'filter',
											}}
										/>
									</div>
								))}
							</div>
						</ScrollArea>
					</div>
				</div>
			</div>
		</section>
	)
}
