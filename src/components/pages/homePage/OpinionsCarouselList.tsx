// modules
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// lib
import { Opinions } from "@/lib/constants"
// components
import Opinion from "@/components/pages/homePage/Opinion"

export default function OpinionsCarouselList() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full bg-transparent px-4"
    >
      <CarouselContent className="-mt-1 h-[250px]">
        {Opinions.map((opinion, i) => (
          <CarouselItem className="pt-1 md:basis-1/2" key={i}>
            <Opinion opinion={opinion} className="h-[246px]"/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-top-4"/>
      <CarouselNext className="-bottom-4"/>
    </Carousel>
  )
}
