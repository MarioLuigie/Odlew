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
import TextVerticalProcess from '@/components/pages/offerPagePartials/TextVerticalProcess'

export default function OfferPictures() {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div className="flex flex-col bg-[#DEDCD8]">
			{/* IMAGE_1 */}
			<div className="flex">
				<div className="ml-36">
					<TextVerticalProcess right={false}>
						Poznaj nasz proces
					</TextVerticalProcess>
				</div>
				<div className="w-full flex flex-col justify-end items-center">
					<div>
						<div className="flex justify-start items-center gap-2">
							<Drop className="md:min-w-12 md:min-h-12 md:text-xl">
								1
							</Drop>
							<p className="md:text-xl">{OfferImages[0].title}</p>
						</div>
						<div
							className="w-[690px] h-[460px] rounded-lg flex justify-center items-center cursor-pointer"
							onClick={() => {
								setCurrentIndex(0)
								setOpen(true)
								console.log('clicked')
							}}
						>
							<Image
								src={OfferImages[0].path}
								alt={OfferImages[0].alt}
								width={2400}
								height={2400}
								className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_2-3 */}
			<div className="relative h-[860px]">
				{/* IMAGE_2 */}
				<div className="absolute top-[100px] right-[40px]">
					<div className="flex justify-start items-center gap-2">
						<Drop className="md:min-w-12 md:min-h-12 md:text-xl">2</Drop>
						<p className="md:text-xl">{OfferImages[1].title}</p>
					</div>
					<div
						className="w-[805px] md:h-full rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(1)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[1].path}
							alt={OfferImages[1].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_3 */}
				<div className="absolute bottom-0 left-[210px] z-50">
					<div
						className="w-[520px] h-[390px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(2)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[2].path}
							alt={OfferImages[2].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_4 */}
			<div className="relative h-[450px]">
				{/* IMAGE_4 */}
				<div className="absolute top-[20px] right-[95px]">
					<div className="flex justify-start items-center gap-2">
						<Drop className="md:min-w-12 md:min-h-12 md:text-xl">4</Drop>
						<p className="md:text-xl">{OfferImages[3].title}</p>
					</div>
					<div
						className="w-[520px] h-[390] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(3)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[3].path}
							alt={OfferImages[3].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_5-6 */}
			<div className="relative h-[760px]">
				{/* IMAGE_5 */}
				<div className="absolute top-0 left-[40px] z-50">
					<div className="flex justify-start items-center gap-2">
						<Drop className="md:min-w-12 md:min-h-12 md:text-xl">5</Drop>
						<p className="md:text-xl">{OfferImages[4].title}</p>
					</div>
					<div
						className="w-[440px] h-[330px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(4)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[4].path}
							alt={OfferImages[4].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_6 */}
				<div className="absolute bottom-0 right-[480px]">
					<div
						className="w-[690px] h-[460px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(5)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[5].path}
							alt={OfferImages[5].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_7-8 */}
			<div className="relative h-[580px]">
				{/* IMAGE_7 */}
				<div className="absolute top-[40px] right-[90px]">
					<div
						className="w-[390px] h-[520px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(6)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[6].path}
							alt={OfferImages[6].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_8 */}
				<div className="absolute top-[195px] left-[440px] z-50">
					<div
						className="w-[450px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(7)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[7].path}
							alt={OfferImages[7].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_9 */}
			<div className="relative h-[450px]">
				{/* IMAGE_9 */}
				<div className="absolute top-[50px] left-[75px]">
					<div
						className="w-[520px] h-[390] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(8)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[8].path}
							alt={OfferImages[8].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_10-12 */}
			<div className="relative h-[900px]">
				{/* IMAGE_10 */}
				<div className="absolute top-0 right-[40px] z-40">
					<div
						className="w-[440px] h-[330px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(9)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[9].path}
							alt={OfferImages[9].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_11 */}
				<div className="absolute bottom-[80px] right-[90px] z-50">
					<div
						className="w-[450px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(10)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[10].path}
							alt={OfferImages[10].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_12 */}
				<div className="absolute top-[60px] left-[120px]">
					<div
						className="w-[805px] h-[535px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(11)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[11].path}
							alt={OfferImages[11].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_13-14 */}
			<div className="relative h-[700px]">
				{/* IMAGE_13 */}
				<div className="absolute top-[-180px] left-[40px]">
					<div
						className="w-[390px] h-[520px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(12)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[12].path}
							alt={OfferImages[12].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_14 */}
				<div className="absolute bottom-0 right-[155px] z-50">
					<div
						className="w-[690px] h-[460px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(13)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[13].path}
							alt={OfferImages[13].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_15-16 */}
			<div className="relative h-[940px]">
				{/* IMAGE_15 */}
				<div className="absolute top-[200px] left-[155px]">
					<div
						className="w-[805px] h-[535px] rounded-lg flex justify-center items-center cursor-pointer border-2 border-black"
						onClick={() => {
							setCurrentIndex(14)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[14].path}
							alt={OfferImages[14].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_16 */}
				<div className="absolute bottom-0 right-[75px] z-50">
					<div
						className="w-[520px] h-[390px] rounded-lg flex justify-center items-center cursor-pointer border-2 border-black"
						onClick={() => {
							setCurrentIndex(15)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[15].path}
							alt={OfferImages[15].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_17-18 */}
			<div className="relative h-[1200px]">
				{/* IMAGE_17 */}
				<div className="absolute top-[200px] right-[40px] z-50">
					<div
						className="w-[690px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(16)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[16].path}
							alt={OfferImages[16].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_18 */}
				<div className="absolute bottom-[50px] left-[40px]">
					<div
						className="w-[850px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(17)
							setOpen(true)
							console.log('clicked')
						}}
					>
						<Image
							src={OfferImages[17].path}
							alt={OfferImages[17].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-110 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

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
// import TextVerticalProcess from '@/components/pages/offerPagePartials/TextVerticalProcess'

// export default function OfferPictures() {
// 	const [open, setOpen] = useState(false)
// 	const [currentIndex, setCurrentIndex] = useState(0)

// 	return (
// 		<div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center bg-red-400">
// 			<div className="ml-36">
// 				<TextVerticalProcess right={false}>
// 					Poznaj nasz proces
// 				</TextVerticalProcess>
// 			</div>
// 			{OfferImages.map((image, i) => (
// 				<div key={i}>
// 					<div className="flex flex-col gap-3 md:max-w-[600px]">
// 						<div className="flex justify-start items-center gap-2">
// 							<Drop className="md:min-w-12 md:min-h-12 md:text-xl">
// 								{i + 1}
// 							</Drop>
// 							<p className="md:text-xl">{image.title}</p>
// 						</div>

// 						<div
// 							className="w-full h-[300px] md:h-full bg-backgroundDark rounded-lg flex justify-center items-center"
// 							onClick={() => {
// 								setCurrentIndex(i)
// 								setOpen(true)
// 							}}
// 						>
// 							<Image
// 								src={image.path}
// 								alt={image.alt}
// 								width={2400}
// 								height={2400}
// 								className="h-full object-cover rounded-lg"
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			))}

// 			<Lightbox
// 				open={open}
// 				close={() => setOpen(false)}
// 				index={currentIndex}
// 				slides={OfferImages.map(({ path, alt }) => ({ src: path, alt }))}
// 				controller={{ closeOnBackdropClick: true }}
// 				on={{
// 					view: ({ index }) => setCurrentIndex(index),
// 				}}
// 			/>
// 		</div>
// 	)
// }

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
