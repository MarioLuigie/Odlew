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