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
			className="min-h-customScreen flex flex-col bg-background scroll-mt-header"
		>
			<div className="dp:flex dp:min-h-[900px]">
				{/* TEXT */}
				<div className="dp:w-2/3 textPageContainer">
					<div>
						<Title className="titlePage">
							<p className="dp:hidden">Kim jesteśmy?</p>
							<div className="hidden dp:block">
								<p>Kim jesteśmy?</p>
								<p>Co tworzymy?</p>
								<p>Dokąd zmierzamy?</p>
							</div>
						</Title>
						<TextContent className="px-5 dp:text-[18px]">
							<p className='dp:w-[800px]'>
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
				<div className="dp:w-1/3 dp:bg-background dp:pr-[72px]">
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

					<ScrollArea className="h-[900px] w-[500px] rounded-none border-l-[2px]">
						<div className="flex flex-col gap-6 items-end">
							{HomeAboutImages.map((image, i) => (
								<Image
									key={i}
									src={image.path}
									alt={image.alt}
									width={2400}
									height={2400}
									priority
									className="w-[440px] object-cover grayscale contrast-75 hover:grayscale-0 hover:contrast-100 transition duration-500 ease-in-out cursor-pointer"
									style={{
										willChange: 'filter',
									}}
								/>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>

			{/* MOTTO */}
			<div className="h-customScreen flex flex-col justify-center items-center bg-mottoBg">
				<div className="flex flex-col justify-center items-center text-[30px] leading-[70px] dp:text-6xl dp:leading-[150px] font-semibold text-textLight">
					<p>Są rzeczy trudne</p>
					<p>ale</p>
					<p>nie niemożliwe!</p>
				</div>
			</div>
		</section>
	)
}
