// modules
import Image from 'next/image'
// lib
import { HomeContactImages } from '@/lib/constants/images'
// components
import Title from '@/components/shared/Title'
import CompanyName from '@/components/content/CompanyName'
import ContactForm from '@/components/forms/ContactForm'
import ContactInfo from '@/components/content/ContactInfo'

export default function Contact() {
	return (
		<section
			id="kontakt"
			className="min-h-customScreen bg-background scroll-mt-header border-y-[1px] border-zinc-400"
		>
			<div className="dp:flex dp:min-h-customScreen">
				<div className="dp:w-1/2 textPageContainer">
					<div>
						<Title className="mb-6 px-5">
							<p>Kontakt</p>
						</Title>
						<div className="p-6 flex flex-col">
							<CompanyName mode="dark" />
							<ContactInfo />
						</div>
						<Title className="mb-6 px-5">
							<p>Napisz do nas</p>
						</Title>
						<div className="flex flex-col px-6 pb-4 dp:pb-0">
							<ContactForm />
						</div>
					</div>
				</div>
				<div className="hidden dp:w-1/2 dp:bg-backgroundDark dp:flex">
					<Image
						src={HomeContactImages[0].path}
						alt={HomeContactImages[0].alt}
						width={1000}
						height={1000}
            className="h-customScreen w-auto object-cover"
					/>
				</div>
			</div>
		</section>
	)
}
