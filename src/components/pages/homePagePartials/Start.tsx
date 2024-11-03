import CompanyName from "@/components/content/CompanyName"
import CustomButton from "@/components/shared/CustomButton"

export default function Start() {
  return (
    <section
      id="home"
      className="h-customScreen p-5 pb-28 flex flex-col justify-end gap-4 homepage-background scroll-mt-header"
    >
      <CompanyName mode="light" />
      <CustomButton navlink path="/realizacje">
        Zobacz realizacje
      </CustomButton>
    </section>
  )
}
