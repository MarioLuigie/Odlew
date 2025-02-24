//components
import Start from "@/components/pages/homePagePartials/Start"
import About from "@/components/pages/homePagePartials/About"
import Realizations from "@/components/pages/homePagePartials/Realizations"
import Contact from "@/components/pages/homePagePartials/Contact"

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background">
      <Start />
      <About />

      <Realizations />
      <Contact />
    </div>
  )
}
