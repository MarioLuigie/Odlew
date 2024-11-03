import TextContent from "@/components/shared/TextContent"
import Title from "@/components/shared/Title"
import CustomButton from "@/components/shared/CustomButton"

export default function OfferPage() {
  return (
    <div className="min-h-customScreen bg-background">
      <div className="bg-menuTopBg p-5">
        <Title className="text-textLight pb-5">Nasza Oferta</Title>
        <TextContent className="text-textLight">
          Kompleksowo realizujemy zamysł i projekt klienta. Oferujemy wykonanie
          gotowego odlewu od szkicu lub pomysłu autora. Wykonujemy pomniki,
          tablice pamiątkowe, statuetki, medale okolicznościowe, rzeźby,
          płaskorzeźby, elementy ozdobne, kopie istniejących przedmiotów lub
          ozdobnych przedmiotów użytkowych. Specjalizujemy się w odlewnictwie
          brązu i mosiądzu w technologii wytapianych modeli woskowych przy
          użyciu mas gipsowych. Pozwala to na wykonywanie odlewów których
          kształt zależy tylko od wyobraźni autora. Stworzymy rzeźbę na każdą
          okazję.
        </TextContent>
        <CustomButton navlink path="/realizacje" className="my-8">
          Zobacz realizacje
        </CustomButton>
      </div>
    </div>
  )
}
