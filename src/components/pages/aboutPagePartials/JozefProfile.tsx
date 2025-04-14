// lib
import { AboutImages } from '@/lib/constants/images'
// components
import CustomProfileSection from '@/components/shared/CustomProfileSection'
import TextContent from '@/components/shared/TextContent'
import TextVerticalLine from '@/components/shared/TextVerticalLine'

export default function JozefProfile() {
	return (
		<CustomProfileSection
			className="bg-background"
			picture={AboutImages.jozef}
		>
			<div className="flex flex-col items-end w-full">
				<TextVerticalLine className="p-5 h-[120px] text-right mt-4 md:mt-0 md:mb-12">
					<div className='w-full flex gap-8 items-end pt-[15px] pl-[50px]'>
						<p className="font-normal text-[44px]">
							Józef Polewka
						</p>
						<p className="pb-[12px] text-sm font-medium text-[#817D78]">Artysta - rzeźbiarz</p>
					</div>
				</TextVerticalLine>
				<TextContent className="lg:w-[320px] mt-4 md:mt-0 md:text-lg font-medium">
					Moja przygoda z płynnym brązem zaczęła się w szkole im. Kenara w
					Zakopanem wraz z osobą nauczyciela Bronisława Krzysztofa.
					Zaszczepiona pasja do dnia dzisiejszego nie wygasła, a nawet
					więcej, jest kontynuowana w pracy i ogromnym zaangażowaniem moich
					synów Szymona i Antoniego, których wspieram swoim doświadczeniem
					i artystyczną wrażliwością.
				</TextContent>
			</div>
		</CustomProfileSection>
	)
}
