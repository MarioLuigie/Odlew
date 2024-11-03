import Title from "@/components/content/Title"
import TextContent from "@/components/content/TextContent"
import CustomProfileSection from "@/components/shared/CustomProfileSection"

export default function AboutPage() {
  return (
    <div className="min-h-customScreen bg-background">
      <Title>Nasz zespół</Title>
      <TextContent>
        Dzięki więzom rodzinnym doskonale się rozumiemy. Nasza współpraca
        opiera się na wzajemnym zaufaniu i szacunku.
      </TextContent>
      <CustomProfileSection />
    </div>
  )
}

{
  /* WORKING PROCESS - HOW DO WE WORK? */
}
