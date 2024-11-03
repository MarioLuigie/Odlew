// components
import CustomProfileSection from "@/components/shared/CustomProfileSection"
import TextContent from "@/components/shared/TextContent"
import TextVerticalLine from "@/components/shared/TextVerticalLine"

export default function AntoniProfile() {
  return (
    <CustomProfileSection>
      <TextVerticalLine className="p-6 h-[130px] text-right">
        <p className="font-medium text-2xl">Antoni Polewka</p>
      </TextVerticalLine>
      <TextContent>
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
