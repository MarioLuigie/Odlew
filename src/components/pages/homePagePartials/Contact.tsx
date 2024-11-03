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
    <Title>
      <p>Kontakt</p>
    </Title>
    <div className="p-6 flex flex-col">
      <CompanyName mode="dark" />
      <ContactInfo />
    </div>
    <Title>
      <p>Napisz do nas</p>
    </Title>
    <div className="flex flex-col px-6">
      <ContactForm />
      <div className="flex justify-center items-center gap-1 mt-4 text-zinc-500">
        <small className="text-[20px]">*</small>
        <small>Pola oznaczone gwiazdką są obowiązkowe</small>
      </div>
    </div>
  </section>
  )
}