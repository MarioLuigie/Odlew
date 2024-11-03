// components
import CustomProfileSection from "@/components/shared/CustomProfileSection"
import TextContent from "@/components/shared/TextContent"
import TextVerticalLine from "@/components/shared/TextVerticalLine"

export default function JozefProfile() {
  return (
    <CustomProfileSection className="bg-background">
      <TextVerticalLine className="p-6 h-[130px] text-right">
        <p className="font-medium text-2xl">Józef Polewka</p>
        <p>Artysta - rzeźbiarz</p>
      </TextVerticalLine>
      <TextContent>
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
