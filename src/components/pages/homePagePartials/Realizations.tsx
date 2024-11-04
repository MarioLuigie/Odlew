// modules
import Image from "next/image"
// lib
import { ProductImages } from "@/lib/constants/images"
// components
import CustomButton from "@/components/shared/CustomButton"
import TextContent from "@/components/shared/TextContent"
import Title from "@/components/shared/Title"
import Opinions from "@/components/pages/homePagePartials/Opinions"

export default function Realizations() {
  return (
<section
        id="realizacje"
        className="min-h-customScreen bg-background scroll-mt-header"
      >
        <Title className="mb-6 px-5">
          <p>Nasze realizacje</p>
          <p>i ich znaczenie</p>
        </Title>
        <TextContent className="px-5">
          <p>
            Nasze realizacje to nie tylko dzieła sztuki, ale także wyjątkowe
            projekty, które łączą pasję z rzemiosłem. Pracujemy nad różnorodnymi
            realizacjami, od indywidualnych zleceń po większe projekty
            artystyczne i kulturalne. Współpraca z artystami oraz klientami
            pozwala nam tworzyć niepowtarzalne dzieła, które mają swoje miejsce
            w galeriach, instytucjach oraz prywatnych kolekcjach.
          </p>
        </TextContent>
        <div className="mt-12 flex flex-col gap-1 overflow-x-auto">
          {ProductImages.slice(0, 3).map((image, i) => (
            <Image
              key={i}
              src={image.path}
              alt={image.alt}
              width={2400}
              height={2400}
              priority
              className="w-full"
            />
          ))}
        </div>
        <div className="px-5 my-12">
          <CustomButton navlink path="/realizacje">
            Zobacz więcej
          </CustomButton>
        </div>
          <Opinions />
      </section>
  )
}