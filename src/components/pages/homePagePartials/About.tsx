// components
import CustomButton from '@/components/shared/CustomButton'
import TextContent from '@/components/shared/TextContent'
import Title from '@/components/shared/Title'
import AboutPictures from '@/components/pages/homePagePartials/AboutPictures'

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
					<AboutPictures />
				</div>
			</div>
		</section>
	)
}
