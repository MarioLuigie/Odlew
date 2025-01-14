'use client'
// modules
import Lightbox from 'yet-another-react-lightbox'
import { useState } from 'react'
import Image from 'next/image'
// lib
import { ProductImages } from '@/lib/constants/images'
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
		<div className="flex flex-col gap-8 dp:flex-row dp:flex-wrap dp:justify-center">
			{OfferImages.map((section, i) => (
				<div key={i}>
					<div className="flex flex-col gap-3 dp:max-w-[600px]">
						<div className="flex justify-start items-center gap-2">
							<Drop className="dp:min-w-12 dp:min-h-12 dp:text-xl">
								{i + 1}
							</Drop>
							<p className="dp:text-xl">{section.title}</p>
						</div>
						{section.images.map((image, i) => (
							<div
								key={i}
								className="w-full h-[300px] dp:h-full bg-backgroundDark rounded-lg flex justify-center items-center"
								onClick={() => {
									setCurrentIndex(i)
									setOpen(true)
								}}
							>
								<Image
									src={image.path}
									alt={image.alt}
									width={2500}
									height={2500}
									className="h-full object-cover rounded-lg"
								/>
							</div>
						))}
					</div>
				</div>
			))}

			<Lightbox
				open={open}
				close={() => setOpen(false)}
				index={currentIndex}
				slides={ProductImages.map((productImage) => ({
					src: productImage.image.path,
					alt: productImage.image.alt,
				}))}
				controller={{ closeOnBackdropClick: true }}
				on={{
					view: ({ index }) => setCurrentIndex(index),
				}}
			/>
		</div>
	)
}
