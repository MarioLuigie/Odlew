'use client'
// modules
import Lightbox from 'yet-another-react-lightbox'
import { useState } from 'react'
import Image from 'next/image'
// lib
import { ProductImages } from '@/lib/constants/images'
// styles
import 'yet-another-react-lightbox/styles.css'
import CustomButton from '@/components/shared/CustomButton'

export default function RealizationsPicturesTop() {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div>
			{/* Grid dla ProductImages z wyrównaniem wysokości */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* PRODUCT_7 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(0)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[445px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[0].image.path}
							alt={ProductImages[0].image.alt}
							fill
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[0].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[0].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_17 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(1)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[445px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[1].image.path}
							alt={ProductImages[1].image.alt}
							fill
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[1].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[1].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_13 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(2)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[360px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[2].image.path}
							alt={ProductImages[2].image.alt}
							fill
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[2].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[2].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_16 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(3)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[360px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[3].image.path}
							alt={ProductImages[3].image.alt}
							fill
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[3].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[3].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_6 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(4)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[445px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[4].image.path}
							alt={ProductImages[4].image.alt}
							fill
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[4].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[4].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_4 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(5)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[445px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[5].image.path}
							alt={ProductImages[5].image.alt}
							fill
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[5].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[5].title}
						</p>
					</div>
				</div>
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

// 'use client'
// // modules
// import Lightbox from 'yet-another-react-lightbox'
// import { useState } from 'react'
// import Image from 'next/image'
// // lib
// import { ProductImages } from '@/lib/constants/images'
// // styles
// import 'yet-another-react-lightbox/styles.css'

// export default function RealizationsPictures() {
// 	const [open, setOpen] = useState(false)
// 	const [currentIndex, setCurrentIndex] = useState(0)

// 	return (
// 		<div>
// 			{/* Grid dla ProductImages z wyrównaniem wysokości */}
// 			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
// 				{ProductImages.map((productImage, i) => (
// 					<div
// 						className="flex flex-col gap-2 h-full cursor-pointer"
// 						key={i}
// 						onClick={() => {
// 							setCurrentIndex(i)
// 							setOpen(true)
// 						}}
// 					>
// 						<div className="w-full min-h-[300px] md:min-h-[800px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
// 							<Image
// 								src={productImage.image.path}
// 								alt={productImage.image.alt}
// 								fill
// 								className="w-full h-full object-cover rounded-lg"
// 							/>
// 						</div>
// 						<div className="flex flex-col pb-6 flex-grow">
// 							<p className="font-semibold">{productImage.author}</p>
// 							<p className="text-zinc-500 text-[14px]">
// 								{productImage.title}
// 							</p>
// 						</div>
// 					</div>
// 				))}
// 			</div>

// 			<Lightbox
// 				open={open}
// 				close={() => setOpen(false)}
// 				index={currentIndex}
// 				slides={ProductImages.map((productImage) => ({
// 					src: productImage.image.path,
// 					alt: productImage.image.alt,
// 				}))}
// 				controller={{ closeOnBackdropClick: true }}
// 				on={{
// 					view: ({ index }) => setCurrentIndex(index),
// 				}}
// 			/>
// 		</div>
// 	)
// }
