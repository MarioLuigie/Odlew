//components
import Start from "@/components/pages/homePagePartials/Start"
import About from "@/components/pages/homePagePartials/About"
import Offer from "@/components/pages/homePagePartials/Offer "
// import Realizations from "@/components/pages/homePagePartials/Realizations"
import Contact from "@/components/pages/homePagePartials/Contact"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Start />
      <About />
      <Offer />
      {/* <Realizations /> */}
      <Contact />
    </div>
  )
}
