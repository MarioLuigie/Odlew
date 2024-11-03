import TextContent from "@/components/shared/TextContent"
import CustomProfileSection from "@/components/shared/CustomProfileSection"
import TextVerticalLine from "../shared/TextVerticalLine"

export default function AboutPage() {
  return (
    <div className="min-h-customScreen bg-background">
      <CustomProfileSection>
        <TextVerticalLine className="p-6 h-[130px] text-right">
          <p>Józef Polewka</p>
          <p>Artysta - rzeźbiarz</p>
        </TextVerticalLine>
        <TextContent>
          Dzięki więzom rodzinnym doskonale się rozumiemy. Nasza współpraca
          opiera się na wzajemnym zaufaniu i szacunku.
        </TextContent>
      </CustomProfileSection>
    </div>
  )
}

{
  /* WORKING PROCESS - HOW DO WE WORK? */
}
