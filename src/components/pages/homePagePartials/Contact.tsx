// modules
import Image from 'next/image'
// lib
import { HomeContactImages } from '@/lib/constants/images'
// components
import ContactForm from '@/components/forms/ContactForm'
import TextVertical from '@/components/shared/TextVertical'

export default function Contact() {
	return (
		<section
			id="kontakt"
			className="xl:min-h-customScreen md:bg-backgroundDark scroll-mt-header"
		>
			<div className="md:flex xl:min-h-customScreen">

				{/* CONTACT INFO */}
				<div className="md:w-1/2 md:flex md:flex-col md:justify-start md:pl-28 xl:pl-36">
					<div className="flex items-end w-full">
						<TextVertical right={false}>Kontakt</TextVertical>
						<div className="pl-[56px] flex flex-col w-full">
							<div className="pb-[13px] border-b-[1px] border-[#383638] w-full">
								<p className="font-semibold text-lg text-[#383638]">
									P.S. ODLEW Odlewnia Artystyczna
								</p>
							</div>

							<div className="py-[13px] border-b-[1px] border-[#EEE9E2] w-full">
								<p className="font-medium text-sm text-[#383638]">
									Adres: Jawornik 505, 32-400 Myślenice
								</p>
							</div>

							<div className="py-[13px] border-b-[1px] border-[#EEE9E2] w-full">
								<p className="font-medium text-sm text-[#383638]">
									E-mail: polewka.szymon@gmail.com
								</p>
							</div>

							<div className="py-[13px] border-b-[1px] border-[#EEE9E2] w-full">
								<p className="font-medium text-sm text-[#383638]">
									Tel.: +48 665 981 994
								</p>
							</div>

							<div className="text-[36px] text-[#383638] font-normal pt-[80px]">
								<p>Napisz do nas</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col pl-[56px] pt-8">
						<ContactForm />
					</div>
				</div>

				{/* CONTACT IMAGE */}
				<div className="hidden md:px-28 md:pb-44 md:w-1/2 md:bg-backgroundDark md:flex md:justify-center md:items-end">
					<Image
						src={HomeContactImages[0].path}
						alt={HomeContactImages[0].alt}
						width={2400}
						height={2400}
						className="h-full md:w-[320px] md:h-[450px] object-cover"
					/>
				</div>
			</div>
		</section>
	)
}
