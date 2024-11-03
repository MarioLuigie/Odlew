import TextContent from "@/components/shared/TextContent"
import Title from "@/components/shared/Title"
import JozefProfile from "@/components/pages/aboutPagePartials/JozefProfile"
import SzymonProfile from "@/components/pages/aboutPagePartials/SzymonProfile"
import AntoniProfile from "@/components/pages/aboutPagePartials/AntoniProfile"

export default function AboutPage() {
  return (
    <div className="min-h-customScreen bg-background">
      <Title>Nasz Zespół</Title>
      <TextContent>
        Dzięki więzom rodzinnym doskonale się rozumiemy. Nasza współpraca opiera
        się na wzajemnym zaufaniu i szacunku.
      </TextContent>
      <JozefProfile />
      <SzymonProfile />
      <AntoniProfile />
    </div>
  )
}

{
  /* WORKING PROCESS - HOW DO WE WORK? */
}
