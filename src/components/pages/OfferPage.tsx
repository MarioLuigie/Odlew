import TextContent from "@/components/shared/TextContent"
import Title from "@/components/shared/Title"

export default function OfferPage() {
  return (
    <div className="min-h-customScreen bg-background">
      <div className="bg-menuTopBg pb-6">
        <Title className="text-textLight">Nasza Oferta</Title>
        <TextContent className="text-textLight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eos sequi laborum explicabo voluptas eaque, exercitationem error ipsum
          praesentium? Ipsa, ut.
        </TextContent>
      </div>
    </div>
  )
}

