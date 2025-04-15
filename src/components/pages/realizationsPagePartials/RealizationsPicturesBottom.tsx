'use client'
// modules
import Lightbox from 'yet-another-react-lightbox'
import { useState } from 'react'
import Image from 'next/image'
// lib
import { ProductImages } from '@/lib/constants/images'
// styles
import 'yet-another-react-lightbox/styles.css'
import Drop from '@/components/shared/Drop'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function RealizationsPicturesBottom() {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div>
			{/* Grid dla ProductImages z wyrównaniem wysokości */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* PRODUCT_3 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(6)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[445px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[6].image.path}
							alt={ProductImages[6].image.alt}
							fill
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[6].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[6].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_15 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(7)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[360px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[7].image.path}
							alt={ProductImages[7].image.alt}
							fill
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[7].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[7].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_18 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(8)
						setOpen(true)
					}}
				>
					{/* <div className="w-[360px] h-[445px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[8].image.path}
							alt={ProductImages[8].image.alt}
							fill
							className="w-full h-full object-cover scale-125 rounded-lg"
						/>
					</div> */}

					<div className="w-[360px] h-[445px] bg-backgroundDark rounded-lg relative overflow-hidden">
						<div className="absolute inset-0 transform scale-125">
							<Image
								src={ProductImages[8].image.path}
								alt={ProductImages[8].image.alt}
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</div>

					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[8].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[8].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_12 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(9)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[445px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[9].image.path}
							alt={ProductImages[9].image.alt}
							fill
							className="w-full h-full object-cover object-[50%_75%] rounded-lg scale-x-[-1]"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[9].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[9].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_11 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(10)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[360px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[10].image.path}
							alt={ProductImages[10].image.alt}
							fill
							className="w-full h-full object-cover object-[20%_50%] rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[10].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[10].title}
						</p>
					</div>
				</div>

				{/* PRODUCT_14 */}
				<div
					className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
					onClick={() => {
						setCurrentIndex(11)
						setOpen(true)
					}}
				>
					<div className="w-[360px] h-[360px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
						<Image
							src={ProductImages[11].image.path}
							alt={ProductImages[11].image.alt}
							fill
							className="w-full h-full object-cover object-[27%_50%] rounded-lg"
						/>
					</div>
					<div className="flex flex-col pb-6 flex-grow">
						<p className="font-semibold">{ProductImages[11].author}</p>
						<p className="text-zinc-500 text-[14px]">
							{ProductImages[11].title}
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
						filter: 'none',
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
