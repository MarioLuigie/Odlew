// components
import CustomProfileSection from "@/components/shared/CustomProfileSection"
import TextContent from "@/components/shared/TextContent"
import TextVerticalLine from "@/components/shared/TextVerticalLine"
import { AboutImages } from "@/lib/constants/images"

export default function JozefProfile() {
  return (
    <CustomProfileSection className="bg-background" picture={AboutImages.jozef}>
      <TextVerticalLine className="p-5 h-[130px] text-right">
        <p className="font-medium text-2xl">Józef Polewka</p>
        <p>Artysta - rzeźbiarz</p>
      </TextVerticalLine>
      <TextContent className="px-5">
        Moja przygoda z płynnym brązem zaczęła się w szkole im. Kenara w
        Zakopanem wraz z osobą nauczyciela Bronisława Krzysztofa. Zaszczepiona
        pasja do dnia dzisiejszego nie wygasła, a nawet więcej, jest
        kontynuowana w pracy i ogromnym zaangażowaniu moich synów Szymona i
        Antoniego, których wspieram swoim doświadczeniem i artystyczną
        wrażliwością.
      </TextContent>
    </CustomProfileSection>
  )
}
