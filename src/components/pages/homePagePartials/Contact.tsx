// modules
import Image from 'next/image';
// lib
import { HomeContactImages } from '@/lib/constants/images';
// components
import ContactForm from '@/components/forms/ContactForm';
import TextVerticalContact from '@/components/shared/TextVerticalContact';

export default function Contact() {
	return (
		<section id="kontakt" className="bg-backgroundDark scroll-mt-header">
			<div className="md:flex md:pb-12">
				{/* CONTACT INFO */}
				<div className="md:w-1/2 md:flex md:flex-col md:justify-end md:pl-28 xl:pl-36">
					<div className="flex items-end w-full">
						<div className="hidden md:block">
							<TextVerticalContact right={false}>
								Kontakt
							</TextVerticalContact>
						</div>
						<div className="pt-8 pl-8 pr-8 md:pl-[56px] flex flex-col justify-between w-full">
							<div>
								<div className="pb-[13px] border-b-[1px] border-[#383638] w-full">
									<p className="font-semibold text-base text-[#383638]">
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
							</div>

							<div className="text-2xl md:text-[36px] text-[#383638] font-normal pt-[70px]">
								<p className="leading-none">Napisz do nas</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col p-8 md:pl-[56px] md:pt-10">
						<ContactForm />
					</div>
				</div>

				{/* CONTACT IMAGE */}
				<div className="hidden md:pb-44 md:px-12 md:w-1/2 md:bg-backgroundDark md:flex md:justify-center md:items-end">
					<Image
						src={HomeContactImages[0].path}
						alt={HomeContactImages[0].alt}
						width={2400}
						height={2400}
						className="h-full md:w-[320px] md:h-[450px] xl:w-[320px] xl:h-[450px] 3xl:w-[450px] 3xl:h-[640px] object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
