'use client'
// modules
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
// lib
import { IOpinion } from '@/lib/models/opinion.model'
// components
import Opinion from '@/components/content/Opinion'

export default function OpinionsCarouselList({
	opinions,
  isAdmin,
}: {
	opinions: IOpinion[] | undefined
  isAdmin: boolean
}) {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			orientation="vertical"
			className="w-full bg-transparent px-4"
		>
			<CarouselContent className="-mt-1 h-[340px]">
				{opinions &&
					opinions.map((opinion, i) => (
						<CarouselItem className="pt-1 md:basis-1/2" key={i}>
							<Opinion
								opinion={opinion}
								className="h-[200px]"
								isAdmin={isAdmin}
							/>
						</CarouselItem>
					))}
			</CarouselContent>
			<CarouselPrevious className="-top-4 w-10 h-10 rounded-none rounded-tl-full rounded-tr-full rounded-bl-full rotate-90 bg-[#E36A00] hover:bg-accentHover border-0" />
			<CarouselNext className="-bottom-4 w-10 h-10 rounded-none rounded-tr-full rounded-tl-full rounded-br-full bg-[#E36A00] hover:bg-accentHover border-0" />
		</Carousel>
	)
}
