// components
import CustomProfileSection from "@/components/shared/CustomProfileSection"
import TextContent from "@/components/shared/TextContent"
import TextVerticalLine from "@/components/shared/TextVerticalLine"

export default function SzymonProfile() {
  return (
    <CustomProfileSection className="bg-background">
      <TextVerticalLine className="p-5 h-[130px] text-right">
        <p className="font-medium text-2xl">Szymon Polewka</p>
        <p>Właściciel firmy</p>
      </TextVerticalLine>
      <TextContent className="px-5">
        Jestem absolwentem Metalurgii na Wydziale Odlewniczym krakowskiego AGH.
        Jako pracę dyplomową wykonałem odlew małej formy rzeźbiarskiej autorstwa
        Ojca. To On zaraził mnie odlewnictwem i przekazał swoją wiedzę.
        Najbardziej fascynuje mnie przemiana woskowego plastycznego modelu w
        trwałą rzeźbę z metalu. Prywatnie interesuję się Formułą 1 i jeżdżę
        rowerem szosowym. Jestem szczęśliwym mężem oraz ojcem dwójki urwisów.
      </TextContent>
    </CustomProfileSection>
  )
}
