// lib
import { Images } from '@/lib/constants/images'
// components
import TextContent from '@/components/shared/TextContent'
import CustomButton from '@/components/shared/CustomButton'
import Image from 'next/image'
import OfferPictures from '@/components/pages/offerPagePartials/OfferPictures'

export default function OfferPage() {
	return (
		<div className="bg-background pb-32">
			<div className="bg-[#DAD7D1] h-[130px]"></div>
			<div className="relative bg-menuTopBg lg:h-[720px] xl:h-[920px] overflow-hidden">
				<div className='lg:w-[550px] xl:w-[805px] 2xl:w-[960px]'>
					<Image
						src={Images.OFFER.path}
						alt={Images.OFFER.alt}
						width={2400}
						height={2400}
						className="w-full h-full mt-[65px] lg:ml-[40px] 2xl:ml-[120px] object-cover lg:object-[60%_80%] xl:object-[50%_60%]"
					/>
				</div>
				<div className="absolute lg:bottom-[60px] lg:right-[50px] xl:bottom-[60px] xl:right-[100px] 2xl:right-[200px] lg:w-[500px] xl:w-[590px]">
					<div className="font-normal text-[54px] text-[#EEE9E2] pb-5">
						Co oferujemy?
					</div>
					<TextContent className="text-[#EEE9E2] font-medium text-lg">
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
					<CustomButton navlink path="/realizacje" className="mt-10">
						Zobacz realizacje
					</CustomButton>
				</div>
			</div>

			<div className="bg-background">
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
