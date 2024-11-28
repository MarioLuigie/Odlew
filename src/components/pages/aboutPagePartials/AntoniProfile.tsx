// components
import CustomProfileSection from "@/components/shared/CustomProfileSection"
import TextContent from "@/components/shared/TextContent"
import TextVerticalLine from "@/components/shared/TextVerticalLine"
import { AboutImages } from "@/lib/constants/images"

export default function AntoniProfile() {
  return (
    <CustomProfileSection className="bg-background" picture={AboutImages.antoni}>
      <TextVerticalLine className="p-5 h-[130px] text-right">
        <p className="font-medium text-2xl">Antoni Polewka</p>
      </TextVerticalLine>
      <TextContent className="px-5">
        Jako najmłodszy w rodzinie już od młodzieńczych lat obcowałem z tym jak
        Tata pracował nad swoimi rzeźbami i przyglądałem się każdemu z etapów
        ich powstawania. Kiedy podrosłem to wtedy jak tylko mogłem pomagałem w
        pracowni. Ukończyłem liceum im. Mikołaja Kopernika w Kalwarii
        Zebrzydowskiej o profilu wojskowym. Moje zainteresowania to historia i
        militaria lecz to fascynacja płynnym brązem i obróbką metali przyczyniła
        się do tego czym aktualnie się zajmuje.
      </TextContent>
    </CustomProfileSection>
  )
}
