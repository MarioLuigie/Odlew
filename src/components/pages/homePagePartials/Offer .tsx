// modules
import Image from "next/image"
// lib
import { OfferImages } from "@/lib/constants/images"
// components
import CustomButton from "@/components/shared/CustomButton"
import TextContent from "@/components/shared/TextContent"
import Title from "@/components/shared/Title"

export default function Offer() {
  return (
    <section
        id="oferta"
        className="min-h-customScreen bg-background scroll-mt-header"
      >
        <Title>
          <p>Co oferujemy</p>
          <p>i dla kogo?</p>
        </Title>
        <TextContent>
          <p>
            Współpracujemy z artystami którzy swoje prace tworzą w plastycznym
            materiale tj wosk, glina, plastelina lub drewno a chcą je utrwalić w
            metalowej postaci. Z każdym kto chce mieć coś stworzonego
            “wyrzeźbionego” przez siebie. Stworzyć oryginalny prezent dla
            bliskiej osoby. Do współpracy zachęcamy instytucje kultury, urzędy i
            organizacje chcące upamiętnić ważne wydarzenia lub osoby.
          </p>
        </TextContent>
        <div className="px-5 my-12">
          <CustomButton navlink path="/oferta">
            Czytaj więcej
          </CustomButton>
        </div>
        <div className="mt-12 flex gap-2 overflow-x-auto">
          {OfferImages.map((image, i) => (
            <Image
              key={i}
              src={image.path}
              alt={image.alt}
              width={600}
              height={600}
              priority
              className="w-full"
            />
          ))}
        </div>
      </section>
  )
}