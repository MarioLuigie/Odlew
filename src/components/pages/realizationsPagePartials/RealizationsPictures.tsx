'use client'
import Image from 'next/image'
import { ProductImages } from '@/lib/constants/images'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useState } from 'react'

export default function RealizationsPictures() {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div>
			{/* Grid dla ProductImages z wyrównaniem wysokości */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
				{ProductImages.map((productImage, i) => (
					<div
						className="flex flex-col gap-2 h-full cursor-pointer"
						key={i}
						onClick={() => {
							setCurrentIndex(i)
							setOpen(true)
						}}
					>
						<div className="w-full min-h-[300px] dp:min-h-[800px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
							<Image
								src={productImage.image.path}
								alt={productImage.image.alt}
								fill
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
						<div className="flex flex-col pb-6 flex-grow">
							<p className="font-semibold">{productImage.author}</p>
							<p className="text-zinc-500 text-[14px]">
								{productImage.title}
							</p>
						</div>
					</div>
				))}
			</div>

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
