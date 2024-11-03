import TextContent from "@/components/shared/TextContent"
import Title from "@/components/shared/Title"
import JozefProfile from "@/components/pages/aboutPagePartials/JozefProfile"
import SzymonProfile from "@/components/pages/aboutPagePartials/SzymonProfile"
import AntoniProfile from "@/components/pages/aboutPagePartials/AntoniProfile"

export default function AboutPage() {
  return (
    <div className="min-h-customScreen bg-background">
      <div className="bg-menuTopBg p-5">
        <Title className="text-textLight pb-5">Nasz Zespół</Title>
        <TextContent className="text-textLight">
          Dzięki więzom rodzinnym doskonale się rozumiemy. Nasza współpraca
          opiera się na wzajemnym zaufaniu i szacunku.
        </TextContent>
      </div>
      <JozefProfile />
      <SzymonProfile />
      <AntoniProfile />
    </div>
  )
}

{
  /* WORKING PROCESS - HOW DO WE WORK? */
}
