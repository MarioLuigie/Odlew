// modules
import Image from 'next/image'
// lib
import { HomeProductImages } from '@/lib/constants/images'
// components
import CustomButton from '@/components/shared/CustomButton'
import TextContent from '@/components/shared/TextContent'
import Title from '@/components/shared/Title'

export default function Realizations() {

	return (
		<section
			id="realizacje"
			className="min-h-customScreen bg-background scroll-mt-header"
		>
			<div className="dp:flex dp:flex-col dp:min-h-customScreen">
				<div className='dp:flex border-b-[1px] border-zinc-400 dp:max-h-customScreen'>
					<div className="dp:w-1/2 textPageContainer">
						<div>
							<Title className="titlePage">
								<p>Nasze realizacje</p>
								<p>i ich znaczenie</p>
							</Title>
							<TextContent className="px-5 dp:text-lg">
								<p>
									Nasze realizacje to nie tylko dzieła sztuki, ale
									także wyjątkowe projekty, które łączą pasję z
									rzemiosłem. Pracujemy nad różnorodnymi realizacjami,
									od indywidualnych zleceń po większe projekty
									artystyczne i kulturalne. Współpraca z artystami oraz
									klientami pozwala nam tworzyć niepowtarzalne dzieła,
									które mają swoje miejsce w galeriach, instytucjach
									oraz prywatnych kolekcjach.
								</p>
							</TextContent>
							<div className="px-5 my-12 dp:block hidden">
								<CustomButton navlink path="/realizacje">
									Zobacz więcej
								</CustomButton>
							</div>
						</div>
					</div>
					<div className="dp:w-1/2 dp:bg-backgroundDark dp:flex dp:justify-center dp:items-center overflow-hidden">
						<div className="mt-12 dp:mt-0 flex flex-col gap-1">
							{HomeProductImages.slice(1, 2).map((image, i) => (
								<Image
									key={i}
									src={image.path}
									alt={image.alt}
									width={2400}
									height={2400}
									priority
									className="w-full mx-auto"
								/>
							))}
						</div>

						<div className="px-5 my-12 dp:hidden">
							<CustomButton navlink path="/realizacje">
								Zobacz więcej
							</CustomButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
