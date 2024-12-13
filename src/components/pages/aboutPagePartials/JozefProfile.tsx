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
			<div className="dp:p-24">
				<TextVerticalLine className="p-5 h-[120px] text-right mt-4 dp:mt-0 dp:mb-12">
					<p className="font-medium text-2xl dp:text-5xl">Józef Polewka</p>
					<p className="dp:text-2xl">Artysta - rzeźbiarz</p>
				</TextVerticalLine>
				<TextContent className="px-5 mt-4 dp:mt-0 dp:text-xl">
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
