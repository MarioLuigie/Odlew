// modules
import Image from 'next/image'
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
			<div className="dp:flex dp:min-h-customScreen">
				{/* TEXT */}
				<div className="dp:w-1/2 textPageContainer">
					<div>
						<Title className="titlePage">
							<p className="dp:hidden">Kim jesteśmy?</p>
							<div className="hidden dp:block">
								<p>Kim jesteśmy,</p>
								<p>Co tworzymy,</p>
								<p>Dokąd zmierzamy?</p>
							</div>
						</Title>
						<TextContent className="px-5 dp:text-lg">
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
				<div className="dp:w-1/2 dp:pt-2 dp:bg-backgroundDark">
					<div className="mt-12 dp:mt-0 flex gap-2 dp:gap-6 overflow-x-auto dp:flex-col dp:overflow-y-auto dp:max-h-customScreen">
						{HomeAboutImages.map((image, i) => (
							<Image
								key={i}
								src={image.path}
								alt={image.alt}
								width={2400}
								height={2400}
								priority
								className="w-full"
							/>
						))}
					</div>
				</div>
			</div>

			{/* MOTTO */}
			<div className="h-customScreen flex flex-col justify-center items-center bg-mottoBg">
				<div className="flex flex-col justify-center items-center text-[28px] dp:text-8xl dp:leading-[190px] font-semibold text-textLight">
					<p>Są rzeczy trudne</p>
					<p>ale</p>
					<p>nie niemożliwe!</p>
				</div>
			</div>
		</section>
	)
}
