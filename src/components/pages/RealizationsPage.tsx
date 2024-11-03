import TextContent from "@/components/shared/TextContent"
import Title from "@/components/shared/Title"

export default function RealizationsPage() {
  return (
    <div className="min-h-customScreen bg-background">
      <div className="bg-menuTopBg p-5">
        <Title className="text-textLight pb-5">Nasze Realizacje</Title>
        <TextContent className="text-textLight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eos sequi laborum explicabo voluptas eaque, exercitationem error ipsum
          praesentium? Ipsa, ut.
        </TextContent>
      </div>
    </div>
  )
}

