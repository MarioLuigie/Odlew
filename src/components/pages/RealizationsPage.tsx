import Title from '@/components/shared/Title'
import Image from 'next/image'
import { ProductImages, Images } from '@/lib/constants/images'
import CustomButton from '../shared/CustomButton'
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';

export default function RealizationsPage() {
	const [open, setOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className="min-h-customScreen bg-background">
			<Image
				src={Images.REALIZATIONS.path}
				alt={Images.REALIZATIONS.alt}
				width={2400}
				height={2400}
				className="w-full"
			/>
			<div className="bg-background p-5 py-8">
				<Title className="text-textDark text-center">
					Nasze Realizacje
				</Title>
			</div>

			{/* Grid dla ProductImages z wyrównaniem wysokości */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
				{ProductImages.map((productImage, i) => (
					<div 
						className="flex flex-col gap-2 h-full cursor-pointer"
						key={i}
						onClick={() => { setCurrentIndex(i); setOpen(true); }}
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
					alt: productImage.image.alt
				}))}
				onIndexChange={setCurrentIndex}
			/>

			<div className="p-5 pb-16 flex justify-center">
				<CustomButton navlink path="/kontakt">
					Skontaktuj się z nami
				</CustomButton>
			</div>
		</div>
	)
}


// import Title from '@/components/shared/Title'
// import Image from 'next/image'
// import { ProductImages, Images } from '@/lib/constants/images'
// import CustomButton from '../shared/CustomButton'

// export default function RealizationsPage() {
// 	return (
// 		<div className="min-h-customScreen bg-background">
// 			<Image
// 				src={Images.REALIZATIONS.path}
// 				alt={Images.REALIZATIONS.alt}
// 				width={2400}
// 				height={2400}
// 				className="w-full"
// 			/>
// 			<div className="bg-background p-5 py-8">
// 				<Title className="text-textDark text-center">
// 					Nasze Realizacje
// 				</Title>
// 			</div>

// 			{/* Grid dla ProductImages z wyrównaniem wysokości */}
// 			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
// 				{ProductImages.map((productImage, i) => (
// 					<div className="flex flex-col gap-2 h-full" key={i}>
// 						<div className="w-full min-h-[300px] dp:min-h-[800px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
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

// 			<div className="p-5 pb-16 flex justify-center">
// 				<CustomButton navlink path="/kontakt">
// 					Skontaktuj się z nami
// 				</CustomButton>
// 			</div>
// 		</div>
// 	)
// }


// import Title from '@/components/shared/Title'
// import Image from 'next/image'
// import { ProductImages, Images } from '@/lib/constants/images'
// import CustomButton from '../shared/CustomButton'

// export default function RealizationsPage() {
// 	return (
// 		<div className="min-h-customScreen bg-background">
// 			<Image
// 				src={Images.REALIZATIONS.path}
// 				alt={Images.REALIZATIONS.alt}
// 				width={2400}
// 				height={2400}
// 				className="w-full"
// 			/>
// 			<div className="bg-background p-5 py-8">
// 				<Title className="text-textDark text-center">
// 					Nasze Realizacje
// 				</Title>
// 			</div>

// 			{/* Grid dla ProductImages z wyrównaniem wysokości */}
// 			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
// 				{ProductImages.map((productImage, i) => (
// 					<div className="flex flex-col gap-2 h-full" key={i}>
// 						<div className="w-full min-h-[300px] bg-backgroundDark rounded-lg flex justify-center items-center h-full">
// 							<Image
// 								src={productImage.image.path}
// 								alt={productImage.image.alt}
// 								width={2400}
// 								height={2400}
// 								className="min-h-[300px] object-cover rounded-lg"
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

// 			<div className="p-5 pb-16 flex justify-center">
// 				<CustomButton navlink path="/kontakt">
// 					Skontaktuj się z nami
// 				</CustomButton>
// 			</div>
// 		</div>
// 	)
// }


// import Title from '@/components/shared/Title'
// import Image from 'next/image'
// import { ProductImages, Images } from '@/lib/constants/images'
// import CustomButton from '../shared/CustomButton'

// export default function RealizationsPage() {
// 	return (
// 		<div className="min-h-customScreen bg-background">
// 			<Image
// 				src={Images.REALIZATIONS.path}
// 				alt={Images.REALIZATIONS.alt}
// 				width={2400}
// 				height={2400}
// 				className="w-full"
// 			/>
// 			<div className="bg-background p-5 py-8">
// 				<Title className="text-textDark text-center">
// 					Nasze Realizacje
// 				</Title>
// 			</div>

// 			{/* Grid dla ProductImages */}
// 			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
// 				{ProductImages.map((productImage, i) => (
// 					<div className="flex flex-col gap-2" key={i}>
// 						<div className="w-full min-h-[300px] bg-backgroundDark rounded-lg flex justify-center items-center">
// 							<Image
// 								src={productImage.image.path}
// 								alt={productImage.image.alt}
// 								width={2400}
// 								height={2400}
// 								className="min-h-[300px] object-cover rounded-lg"
// 							/>
// 						</div>
// 						<div className="flex flex-col pb-6">
// 							<p className="font-semibold">{productImage.author}</p>
// 							<p className="text-zinc-500 text-[14px]">
// 								{productImage.title}
// 							</p>
// 						</div>
// 					</div>
// 				))}
// 			</div>

// 			<div className="p-5 pb-16 flex">
// 				<CustomButton navlink path="/kontakt">
// 					Skontaktuj się z nami
// 				</CustomButton>
// 			</div>
// 		</div>
// 	)
// }


// // import Title from '@/components/shared/Title'
// // import Image from 'next/image'
// // import { ProductImages, Images } from '@/lib/constants/images'
// // import CustomButton from '../shared/CustomButton'

// // export default function RealizationsPage() {
// // 	return (
// // 		<div className="min-h-customScreen bg-background">
// // 			<Image
// // 				src={Images.REALIZATIONS.path}
// // 				alt={Images.REALIZATIONS.alt}
// // 				width={2400}
// // 				height={2400}
// // 				className="w-full"
// // 			/>
// // 			<div className="bg-background p-5 py-8">
// // 				<Title className="text-textDark text-center">
// // 					Nasze Realizacje
// // 				</Title>
// // 			</div>
// // 			<div className="flex flex-col gap-3 p-5">
// // 				{ProductImages.map((productImage, i) => (
// // 					<div className="flex flex-col gap-2" key={i}>
// // 						<div className="w-full min-h-[300px] bg-backgroundDark rounded-lg flex justify-center items-center">
// // 							<Image
// // 								src={productImage.image.path}
// // 								alt={productImage.image.alt}
// // 								width={1000}
// // 								height={1000}
// // 								className="min-h-[300px] object-cover rounded-lg"
// // 							/>
// // 						</div>
// // 						<div className="flex flex-col pb-6">
// // 							<p className="font-semibold">{productImage.author}</p>
// // 							<p className="text-zinc-500 text-[14px]">
// // 								{productImage.title}
// // 							</p>
// // 						</div>
// // 					</div>
// // 				))}
// // 			</div>
// // 			<div className="p-5 pb-16">
// // 				<CustomButton navlink path="/kontakt">
// // 					Skontaktuj się z nami
// // 				</CustomButton>
// // 			</div>
// // 		</div>
// // 	)
// // }
