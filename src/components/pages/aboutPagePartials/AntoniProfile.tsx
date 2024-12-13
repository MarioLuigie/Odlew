// lib
import { AboutImages } from '@/lib/constants/images'
// components
import CustomProfileSection from '@/components/shared/CustomProfileSection'
import TextContent from '@/components/shared/TextContent'
import TextVerticalLine from '@/components/shared/TextVerticalLine'

export default function AntoniProfile() {
	return (
		<CustomProfileSection
			className="bg-background"
			picture={AboutImages.antoni}
		>
			<div className="dp:p-24">
				<TextVerticalLine className="p-5 h-[120px] text-right mt-4 dp:mt-0 dp:mb-12">
					<p className="font-medium text-2xl dp:text-5xl">Antoni Polewka</p>
				</TextVerticalLine>
				<TextContent className="px-5 mt-4 dp:mt-0 dp:text-xl">
					Jako najmłodszy w rodzinie już od młodzieńczych lat obcowałem z
					tym jak Tata pracował nad swoimi rzeźbami i przyglądałem się
					każdemu z etapów ich powstawania. Kiedy podrosłem to wtedy jak
					tylko mogłem pomagałem w pracowni. Ukończyłem liceum im. Mikołaja
					Kopernika w Kalwarii Zebrzydowskiej o profilu wojskowym. Moje
					zainteresowania to historia i militaria lecz to fascynacja
					płynnym brązem i obróbką metali przyczyniła się do tego czym
					aktualnie się zajmuje.
				</TextContent>
			</div>
		</CustomProfileSection>
	)
}
