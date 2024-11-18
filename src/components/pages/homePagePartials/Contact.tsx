// modules
import Image from 'next/image'
// lib
import { ContactImages } from '@/lib/constants/images'
// components
import Title from "@/components/shared/Title"
import CompanyName from "@/components/content/CompanyName"
import ContactForm from "@/components/forms/ContactForm"
import ContactInfo from "@/components/content/ContactInfo"

export default function Contact() {
  return (
    <section
    id="kontakt"
    className="min-h-customScreen pb-8 bg-background scroll-mt-header"
  >
    <Title className="mb-6 px-5">
      <p>Kontakt</p>
    </Title>
    <Image 
      src={ContactImages[0].path}
      alt={ContactImages[0].alt}
      width={1000}
      height={1000}
    />
    <div className="p-6 flex flex-col">
      <CompanyName mode="dark" />
      <ContactInfo />
    </div>
    <Title className="mb-6 px-5">
      <p>Napisz do nas</p>
    </Title>
    <div className="flex flex-col px-6">
      <ContactForm />
    </div>
  </section>
  )
}