// lib
import { Images } from '@/lib/constants/images'
// components
import TextContent from '@/components/shared/TextContent'
import Title from '@/components/shared/Title'
import CustomButton from '@/components/shared/CustomButton'
import Image from 'next/image'
import OfferPictures from '@/components/pages/offerPagePartials/OfferPictures'

export default function OfferPage() {
	return (
		<div className="min-h-customScreen bg-background pb-12">
			<div className="bg-menuTopBg">
				<Image
					src={Images.OFFER.path}
					alt={Images.OFFER.alt}
					width={2400}
					height={2400}
					className="w-full"
				/>
				<div className="p-5">
					<Title className="text-textLight pb-5 md:text-3xl">
						Nasza Oferta
					</Title>
					<TextContent className="text-textLight md:text-xl">
						Kompleksowo realizujemy zamysł i projekt klienta. Oferujemy
						wykonanie gotowego odlewu od szkicu lub pomysłu autora.
						Wykonujemy pomniki, tablice pamiątkowe, statuetki, medale
						okolicznościowe, rzeźby, płaskorzeźby, elementy ozdobne, kopie
						istniejących przedmiotów lub ozdobnych przedmiotów użytkowych.
						Specjalizujemy się w odlewnictwie brązu i mosiądzu w
						technologii wytapianych modeli woskowych przy użyciu mas
						gipsowych. Pozwala to na wykonywanie odlewów których kształt
						zależy tylko od wyobraźni autora. Stworzymy rzeźbę na każdą
						okazję.
					</TextContent>
					<CustomButton navlink path="/realizacje" className="my-8">
						Zobacz realizacje
					</CustomButton>
				</div>
			</div>
			<div className="bg-background px-5">
				<Title className="mb-8 md:text-3xl">Poznaj nasz proces</Title>
				<OfferPictures />
			</div>
		</div>
	)
}

{
	/* {Array.from({ length: 12 }, (_, i) => (
	<div key={i} className="flex flex-col gap-3">
		<div className="flex justify-start items-center gap-2">
			<Drop>{i + 1}</Drop>
			<p>Szkic koncepcyjny</p>
		</div>
		<div className="w-full h-[300px] bg-mottoBg rounded-lg flex justify-center items-center">
			{i}
		</div>
	</div>
))} */
}
