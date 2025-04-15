'use client'
// modules
import Lightbox from 'yet-another-react-lightbox'
import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronRight, ChevronLeft } from 'lucide-react'
// lib
import { ProductImages } from '@/lib/constants/images'
// styles
import 'yet-another-react-lightbox/styles.css'
// components
import Drop from '@/components/shared/Drop'

import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function RealizationsPicturesTop() {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	const showToggle = false
	const descriptionTextAlign = "start"
	const descriptionMaxLines = 3

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
							className="w-full h-full object-cover object-[50%_18%] rounded-lg"
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
					title: productImage.author,
					description: productImage.title,
				}))}
				plugins={[Captions]}
				captions={{ showToggle, descriptionTextAlign, descriptionMaxLines }}
				controller={{ closeOnBackdropClick: true }}
				on={{
					view: ({ index }) => setCurrentIndex(index),
				}}
				styles={{
					container: {
						backgroundColor: 'rgba(222, 220, 216, .8)',
						backdropFilter: 'blur(5px)',
					},
					navigationNext: {
						color: '#FF6600', // kolor strzałek "prev" i "next"
					},
					navigationPrev: {
						color: '#FF6600', // kolor strzałek "prev" i "next"
					},
					icon: {
						color: '#FF6600',
					},
					button: {
						filter: 'none'
					},
					captionsTitle: {
						color: '#454345',
						fontSize: "18px",
						fontWeight: "medium",
					},
					captionsDescription: {
						color: '#817D78',
						paddingBottom: "15px",
						fontSize: "14px",
						fontWeight: "normal"
					},
					captionsDescriptionContainer: {
						backgroundColor: "transparent"
					},
					captionsTitleContainer: {
						backgroundColor: "transparent",
						top: "auto",
						bottom: "37px",
					},
				}}
				render={{
					iconClose: () => (
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="top-right"
							color="#cc5f00"
							variant="outline"
						>
							<X />
						</Drop>
					),
					iconPrev: () => (
						<ChevronLeft className="text-[#E36A00] w-[50px] h-[50px]" />
					),
					iconNext: () => (
						<ChevronRight className="text-[#E36A00] w-[50px] h-[50px]" />
					),
				}}
			/>
		</div>
	)
}

// render={{
// 	iconClose: () => (
// 		<Drop
// 			className="md:min-w-12 md:min-h-12 md:text-xl"
// 			corner="top-right"
// 			color="#E36A00"
// 			variant='outline'
// 		>
// 			<X />
// 		</Drop>
// 	),
// 	iconPrev: () => (
// 		<Drop
// 			className="md:min-w-10 md:min-h-10 md:text-lg"
// 			corner="top-left"
// 			color="#E36A00"
// 		>
// 			‹
// 		</Drop>
// 	),
// 	iconNext: () => (
// 		<Drop
// 			className="md:min-w-10 md:min-h-10 md:text-lg transform rotate-45"
// 			corner="top-right"
// 			color="#E36A00"
// 		>
// 			›
// 		</Drop>
// 	),
// }}

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
