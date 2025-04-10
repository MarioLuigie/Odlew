// modules
import Image from 'next/image'
// lib
import { HomeContactImages } from '@/lib/constants/images'
// components
import Title from '@/components/shared/Title'
import CompanyName from '@/components/content/CompanyName'
import ContactForm from '@/components/forms/ContactForm'
import ContactInfo from '@/components/content/ContactInfo'
import TextVertical from '@/components/shared/TextVertical'

export default function Contact() {
	return (
		<section
			id="kontakt"
			className="min-h-customScreen md:bg-backgroundDark scroll-mt-header border-y-[1px] border-zinc-400"
		>
			<div className="md:flex md:min-h-customScreen">
				<div className="md:w-1/2 md:flex md:flex-col md:justify-center md:pl-28 xl:pl-36">
					<TextVertical right={false}>Kontakt</TextVertical>

					<div className="p-6 flex flex-col">
						<CompanyName mode="dark" />
						<ContactInfo />
					</div>
					<Title className="mb-6 px-5">
						<p>Napisz do nas</p>
					</Title>
					<div className="flex flex-col px-6 pb-4 md:pb-0">
						<ContactForm />
					</div>
				</div>
				<div className="hidden md:p-36 md:w-1/2 md:bg-backgroundDark md:flex md:justify-center md:items-center">
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
