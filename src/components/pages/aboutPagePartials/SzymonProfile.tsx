// lib
import { AboutImages } from '@/lib/constants/images'
// components
import CustomProfileSection from '@/components/shared/CustomProfileSection'
import TextContent from '@/components/shared/TextContent'
import TextVerticalLine from '@/components/shared/TextVerticalLine'

export default function SzymonProfile() {
	return (
		<CustomProfileSection
			className="bg-background"
			picture={AboutImages.szymon}
		>
			<div className="dp:p-24">
				<TextVerticalLine className="p-5 h-[120px] text-right mt-4 dp:mt-0 dp:mb-12">
					<p className="font-medium text-2xl dp:text-5xl">Szymon Polewka</p>
					<p className="dp:text-2xl">Właściciel firmy</p>
				</TextVerticalLine>
				<TextContent className="px-5 mt-4 dp:mt-0 dp:text-xl">
					Jestem absolwentem Metalurgii na Wydziale Odlewniczym
					krakowskiego AGH. Jako pracę dyplomową wykonałem odlew małej
					formy rzeźbiarskiej autorstwa Ojca. To On zaraził mnie
					odlewnictwem i przekazał swoją wiedzę. Najbardziej fascynuje mnie
					przemiana woskowego plastycznego modelu w trwałą rzeźbę z metalu.
					Prywatnie interesuję się Formułą 1 i jeżdżę rowerem szosowym.
					Jestem szczęśliwym mężem oraz ojcem dwójki urwisów.
				</TextContent>
			</div>
		</CustomProfileSection>
	)
}
