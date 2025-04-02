'use client'
// modules
import Lightbox from 'yet-another-react-lightbox'
import { useState } from 'react'
import Image from 'next/image'
// styles
import 'yet-another-react-lightbox/styles.css'
// lib
import { OfferImages } from '@/lib/constants/images'
// components
import Drop from '@/components/shared/Drop'

export default function OfferPictures() {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center">
			{OfferImages.map((image, i) => (
				<div key={i}>
					<div className="flex flex-col gap-3 md:max-w-[600px]">
						<div className="flex justify-start items-center gap-2">
							<Drop className="md:min-w-12 md:min-h-12 md:text-xl">
								{i + 1}
							</Drop>
							<p className="md:text-xl">{image.title}</p>
						</div>

						<div
							className="w-full h-[300px] md:h-full bg-backgroundDark rounded-lg flex justify-center items-center"
							onClick={() => {
								setCurrentIndex(i)
								setOpen(true)
							}}
						>
							<Image
								src={image.path}
								alt={image.alt}
								width={2400}
								height={2400}
								className="h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				</div>
			))}

			<Lightbox
				open={open}
				close={() => setOpen(false)}
				index={currentIndex}
				slides={OfferImages.map(({ path, alt }) => ({ src: path, alt }))}
				controller={{ closeOnBackdropClick: true }}
				on={{
					view: ({ index }) => setCurrentIndex(index),
				}}
			/>
		</div>
	)
}

// 'use client'
// // modules
// import Lightbox from 'yet-another-react-lightbox'
// import { useState } from 'react'
// import Image from 'next/image'
// // styles
// import 'yet-another-react-lightbox/styles.css'
// // lib
// import { OfferImages } from '@/lib/constants/images'
// // components
// import Drop from '@/components/shared/Drop'

// export default function OfferPictures() {
// 	const [open, setOpen] = useState(false)
// 	const [currentIndex, setCurrentIndex] = useState(0)

// 	return (
// 		<div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center">
// 			{OfferImages.map((section, i) => (
// 				<div key={i}>
// 					<div className="flex flex-col gap-3 md:max-w-[600px]">
// 						<div className="flex justify-start items-center gap-2">
// 							<Drop className="md:min-w-12 md:min-h-12 md:text-xl">
// 								{i + 1}
// 							</Drop>
// 							<p className="md:text-xl">{section.title}</p>
// 						</div>
// 						{section.images.map((image, i) => (
// 							<div
// 								key={i}
// 								className="w-full h-[300px] md:h-full bg-backgroundDark rounded-lg flex justify-center items-center"
// 								onClick={() => {
// 									setCurrentIndex(i)
// 									setOpen(true)
// 								}}
// 							>
// 								<Image
// 									src={image.path}
// 									alt={image.alt}
// 									width={2500}
// 									height={2500}
// 									className="h-full object-cover rounded-lg"
// 								/>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			))}

// 			<Lightbox
// 				open={open}
// 				close={() => setOpen(false)}
// 				index={currentIndex}
// 				slides={OfferImages.flatMap((section) =>
// 					section.images.map((image) => ({
// 						src: image.path,
// 						alt: image.alt,
// 					}))
// 				)}
// 				controller={{ closeOnBackdropClick: true }}
// 				on={{
// 					view: ({ index }) => setCurrentIndex(index),
// 				}}
// 			/>
// 		</div>
// 	)
// }
