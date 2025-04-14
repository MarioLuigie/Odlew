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
			<div className="flex flex-col items-end w-full">
				<TextVerticalLine className="h-[98px] text-right mt-4 md:mt-0 md:mb-12">
					<div className='w-full flex gap-8 items-end pt-[15px] pl-[50px]'>
						<p className="font-normal text-[44px]">
							Szymon Polewka
						</p>
						<p className="pb-[12px] text-sm font-medium text-[#817D78]">Właściciel firmy</p>
					</div>
				</TextVerticalLine>
				<TextContent className="lg:w-[320px] mt-4 md:mt-0 md:text-lg font-medium">
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
