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

  console.log('Carousel', isAdmin);

	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			orientation="vertical"
			className="w-full bg-transparent px-4"
		>
			<CarouselContent className="-mt-1 h-[260px]">
				{opinions &&
					opinions.map((opinion, i) => (
						<CarouselItem className="pt-1 md:basis-1/2" key={i}>
							<Opinion
								opinion={opinion}
								className="h-[256px]"
								isAdmin={isAdmin}
							/>
						</CarouselItem>
					))}
			</CarouselContent>
			<CarouselPrevious className="-top-4" />
			<CarouselNext className="-bottom-4" />
		</Carousel>
	)
}
