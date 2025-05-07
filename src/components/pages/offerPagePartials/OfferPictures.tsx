'use client'
// modules
import Lightbox from 'yet-another-react-lightbox'
import { useState } from 'react'
import Image from 'next/image'
// styles
import 'yet-another-react-lightbox/styles.css'
// lib
import { OfferImages } from '@/lib/constants/images'
import { MoveDownRight, MoveDownLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
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
					<div className="relative">
						<div className="flex justify-start items-center gap-2 mb-6">
							<Drop
								className="md:min-w-12 md:min-h-12 md:text-xl"
								color="#E36A00"
							>
								1
							</Drop>
						</div>
						<div
							className="lg:w-[690px] lg:h-[460px] rounded-lg flex justify-center items-center cursor-pointer"
							onClick={() => {
								setCurrentIndex(0)
								setOpen(true)
							}}
						>
							<Image
								src={OfferImages[0].path}
								alt={OfferImages[0].alt}
								width={2400}
								height={2400}
								className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
							/>
						</div>
						<p className="absolute -bottom-[54px] right-2 lg:text-[22px] xl:text-[28px] font-normal text-[#6F6C6A] text-right">
							{OfferImages[0].title}
						</p>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_2-3 */}
			<div className="relative h-[910px]">
				{/* IMAGE_2 */}
				<div className="absolute top-[90px] right-[40px] xl:right-[40px] 1xl:right-[40px] 2xl:right-[90px] 3xl:right-[250px]">
					<div className="flex justify-end items-center gap-2 mb-6">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-right"
							color="#E36A00"
						>
							2
						</Drop>
					</div>

					<div className="absolute top-0 -left-20 flex justify-end items-center gap-2">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-right"
							color="#E36A00"
							variant="outline"
						>
							<MoveDownRight size={35} color="#E36A00" />
						</Drop>
					</div>

					<div
						className="lg:w-[805px] lg:h-full rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(1)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[1].path}
							alt={OfferImages[1].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
					<p className="absolute -bottom-[54px] right-2 lg:text-[22px] xl:text-[28px] font-normal text-[#6F6C6A] text-right">
						{OfferImages[1].title}
					</p>
				</div>

				{/* IMAGE_3 */}
				<div className="absolute bottom-0 lg:left-[40px] xl:left-[100px] 1xl:left-[210px] 2xl:left-[210px] 3xl:left-[400px] z-40">
					<div
						className="lg:w-[520px] lg:h-[390px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(2)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[2].path}
							alt={OfferImages[2].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_4 */}
			<div className="relative h-[450px]">
				{/* IMAGE_4 */}
				<div className="absolute -top-[50px] right-[95px] xl:right-[50px] 1xl:right-[50px] 2xl:right-[100px] 3xl:right-[250px]">
					<div className="flex justify-end items-center gap-2 mb-6">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-right"
							color="#E36A00"
						>
							3
						</Drop>
					</div>

					<div className="absolute top-0 -left-20 flex justify-end items-center gap-2">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-right"
							color="#E36A00"
							variant="outline"
						>
							<MoveDownRight size={35} color="#E36A00" />
						</Drop>
					</div>

					<div
						className="lg:w-[520px] lg:h-[390] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(3)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[3].path}
							alt={OfferImages[3].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
					<p className="absolute -bottom-[54px] left-2 lg:text-[22px] xl:text-[27px] font-normal text-[#6F6C6A] text-left">
						{OfferImages[3].title}
					</p>
				</div>
			</div>

			{/* IMAGES GROUP_5-6 */}
			<div className="relative h-[760px]">
				{/* IMAGE_5 */}
				<div className="absolute top-0 left-[40px] lg:left-[40px] xl:left-[40px] 1xl:left-[40px] 2xl:left-[130px] 3xl:left-[180px] z-40">
					<div className="flex justify-start items-center gap-2 mb-6">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							color="#E36A00"
						>
							4
						</Drop>
					</div>

					<div className="absolute top-12 -right-20 flex justify-end items-center gap-2">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl transform rotate-45"
							corner="bottom-left"
							color="#E36A00"
							variant="outline"
						>
							<MoveDownLeft size={35} color="#E36A00" />
						</Drop>
					</div>
					<div
						className="lg:w-[440px] lg:h-[330px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(4)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[4].path}
							alt={OfferImages[4].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_6 */}
				<div className="absolute bottom-0 lg:right-[150px] xl:right-[350px] 1xl:right-[470px] 2xl:right-[470px] 3xl:right-[730px]">
					<div
						className="lg:w-[690px] lg:h-[460px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(5)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[5].path}
							alt={OfferImages[5].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
					<p className="absolute leading-9 lg:-bottom-[50px] xl:-bottom-[92px] left-2 lg:text-[22px] xl:text-[28px] font-normal text-[#6F6C6A] text-left">
						{OfferImages[4].title}
					</p>
				</div>
			</div>

			{/* IMAGES GROUP_7-8 */}
			<div className="relative h-[600px]">
				{/* IMAGE_7 */}
				<div className="absolute lg:top-[120px] xl:top-[80px] 1xl:top-[80px] 3xl:top-[70px] right-[80px] xl:right-[80px] 1xl:right-[80px] 2xl:right-[160px] 3xl:right-[340px]">
					<div
						className="lg:w-[390px] lg:h-[520px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(6)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[6].path}
							alt={OfferImages[6].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_8 */}
				<div className="absolute top-[195px] lg:left-[70px] xl:left-[320px] 1xl:left-[490px] 2xl:left-[500px] 3xl:left-[700px] z-40">
					<div
						className="lg:w-[450px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(7)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[7].path}
							alt={OfferImages[7].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_9 */}
			<div className="relative h-[450px]">
				{/* IMAGE_9 */}
				<div className="absolute lg:top-[90px] xl:top-[70px] lg:left-[75px] xl:left-[75px] 1xl:left-[75px] 2xl:left-[75px] 3xl:left-[350px]">
					<div className="absolute -top-[20px] -right-20 flex justify-end items-center gap-2">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl transform rotate-45"
							corner="bottom-left"
							color="#E36A00"
							variant="outline"
						>
							<MoveDownLeft size={35} color="#E36A00" />
						</Drop>
					</div>
					<div
						className="lg:w-[520px] lg:h-[390] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(8)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[8].path}
							alt={OfferImages[8].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_10-12 */}
			<div className="relative h-[930px]">
				{/* IMAGE_10 */}
				<div className="absolute top-[35px] xl:top-[150px] 1xl:top-[35px] right-[40px] xl:right-[40px] 1xl:right-[40px] 2xl:right-[105px] 3xl:right-[215px] z-40">
					<div
						className="lg:w-[440px] lg:h-[330px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(9)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[9].path}
							alt={OfferImages[9].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_11 */}
				<div className="absolute bottom-[60px] lg:right-[40px] xl:right-[110px] 1xl:right-[120px] 2xl:right-[190px] 3xl:right-[340px] z-40">
					<div
						className="lg:w-[450px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(10)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[10].path}
							alt={OfferImages[10].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_12 */}
				<div className="absolute top-[100px] lg:left-[40px] xl:left-[80px] 1xl:left-[120px] 2xl:left-[145px] 3xl:left-[420px]">
					<div className="absolute -top-20 right-0 flex justify-end items-center gap-2">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-right"
							color="#E36A00"
							variant="outline"
						>
							<MoveDownRight size={35} color="#E36A00" />
						</Drop>
					</div>
					<div
						className="lg:w-[805px] lg:h-[535px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(11)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[11].path}
							alt={OfferImages[11].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_13-14 */}
			<div className="relative h-[700px]">
				{/* IMAGE_13 */}
				<div className="absolute top-[-150px] lg:left-[40px] xl:left-[40px] 1xl:left=[40px] 2xl:left-[80px] 3xl:left-[230px]">
					<div className="absolute -top-16 -right-16 flex justify-end items-center gap-2">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-left"
							color="#E36A00"
							variant="outline"
						>
							<MoveDownLeft size={35} color="#E36A00" />
						</Drop>
					</div>
					<div
						className="lg:w-[390px] lg:h-[520px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(12)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[12].path}
							alt={OfferImages[12].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* IMAGE_14 */}
				<div className="absolute -bottom-[40px] lg:right-[40px] xl:right-[70px] 1xl:right-[200px] 2xl:right-[270px] 3xl:right-[500px] z-40">
					<div className="flex justify-end items-center gap-2 mb-6">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-right"
							color="#E36A00"
						>
							5
						</Drop>
					</div>

					<div className="absolute top-0 -left-12 flex justify-end items-center gap-2">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-right"
							color="#E36A00"
							variant="outline"
						>
							<MoveDownRight size={35} color="#E36A00" />
						</Drop>
					</div>

					<div
						className="lg:w-[690px] lg:h-[460px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(13)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[13].path}
							alt={OfferImages[13].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
					<p className="absolute -bottom-[54px] right-2 lg:text-[22px] xl:text-[27px] font-normal text-[#6F6C6A] text-right">
						{OfferImages[13].title}
					</p>
				</div>
			</div>

			{/* IMAGES GROUP_15-16 */}
			<div className="relative h-[890px]">
				{/* IMAGE_15 */}
				<div className="absolute lg:top-[90px] xl:top-[90px] 1xl:top-[100px] 2xl:top-[100px] 3xl:top-[100px] lg:left-[40px] xl:left-[40px] 1xl:left-[155px] 2xl:left-[] 3xl:left-[340px]">
					<div className="flex justify-start items-center gap-2 mb-6">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-left"
							color="#E36A00"
						>
							6
						</Drop>
					</div>

					<div className="absolute top-[50px] -right-20 flex justify-end items-center gap-2">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl transform rotate-45"
							corner="bottom-left"
							color="#E36A00"
							variant="outline"
						>
							<MoveDownLeft size={35} color="#E36A00" />
						</Drop>
					</div>
					<div
						className="lg:w-[805px] lg:h-[535px] rounded-lg flex justify-center items-center cursor-pointer border-2 border-black"
						onClick={() => {
							setCurrentIndex(14)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[14].path}
							alt={OfferImages[14].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
					<p className="absolute -bottom-[54px] left-2 lg:text-[22px] xl:text-[27px] font-normal text-[#6F6C6A] text-left">
						{OfferImages[14].title}
					</p>
				</div>

				{/* IMAGE_16 */}
				<div className="absolute bottom-0 lg:right-[40px] xl:right-[75px] 1xl:right-[75px] 2xl:right-[150px] 3xl:right-[340px] z-40">
					<div
						className="lg:w-[520px] lg:h-[390px] rounded-lg flex justify-center items-center cursor-pointer border-2 border-black"
						onClick={() => {
							setCurrentIndex(15)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[15].path}
							alt={OfferImages[15].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
			</div>

			{/* IMAGES GROUP_17-18 */}
			<div className="relative lg:h-[1130px] xl:h-[1200px]">
				{/* IMAGE_17 */}
				<div className="absolute lg:top-[60px] xl:top-[100px] 2xl:top-[100px] 3xl:top-[100px] right-[40px] xl:right-[40px] 1xl:right-[40px] 2xl:right-[60px] 3xl:right-[200px] z-40">
					<div className="flex justify-start items-center gap-2 mb-6">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-right"
							color="#E36A00"
						>
							7
						</Drop>
					</div>

					<div className="absolute top-0 right-0 flex justify-end items-center gap-2">
						<Drop
							className="md:min-w-12 md:min-h-12 md:text-xl"
							corner="bottom-left"
							color="#E36A00"
							variant="outline"
						>
							<MoveDownLeft size={35} color="#E36A00" />
						</Drop>
					</div>

					<div
						className="lg:w-[690px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(16)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[16].path}
							alt={OfferImages[16].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
					<p className="absolute -bottom-[54px] right-2 lg:text-[22px] xl:text-[27px] font-normal text-[#6F6C6A] text-right">
						{OfferImages[16].title}
					</p>
				</div>

				{/* IMAGE_18 */}
				<div className="absolute lg:bottom-[80px] xl:bottom-[50px] lg:left-[40px] xl:left-[40px] 1xl:left-[40px] 2xl:left-[60px] 3xl:left-[280px]">
					<div
						className="lg:w-[850px] rounded-lg flex justify-center items-center cursor-pointer"
						onClick={() => {
							setCurrentIndex(17)
							setOpen(true)
						}}
					>
						<Image
							src={OfferImages[17].path}
							alt={OfferImages[17].alt}
							width={2400}
							height={2400}
							className="h-full object-cover rounded-lg object-[100%_50%] grayscale contrast-75 hover:grayscale-0 hover:contrast-100 hover:scale-105 transition duration-500 ease-in-out"
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
				styles={{
					container: {
						backgroundColor: 'rgba(222, 220, 216, .8)',
						backdropFilter: 'blur(5px)',
						paddingTop: "70px",
						paddingBottom: "70px",
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
