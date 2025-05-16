// components
import RealizationsPicturesTop from '@/components/pages/realizationsPagePartials/RealizationsPicturesTop'
import CustomButton from '@/components/shared/CustomButton'
import TextVerticalRealizations from '@/components/shared/TextVerticalRealizations'
import RealizationsPicturesBottom from '@/components/pages/realizationsPagePartials/RealizationsPicturesBottom'

export default function RealizationsPage() {
	return (
		<div className="min-h-customScreen bg-background">
			{/* BACKGROUND UNDER HEADER */}
			<div className="w-full h-[110px] bg-[#DAD7D1]"></div>

			{/* FIRST IMAGE WITH TITLE */}
			<div className="w-full lg:h-[690px] 3xl:h-[800px] pl-40 realizationpage-background">
				<TextVerticalRealizations right={false}>
					Nasze realizacje
				</TextVerticalRealizations>
			</div>

			{/* IMAGES LIST TOP */}
			<div className="mt-[80px] flex">
				<div className="w-[232px] flex justify-end pr-[50px]">
					<div className="w-[2px] bg-[#463E46]"></div>
				</div>
				<div className="w-full flex justify-center bg-red-300">
					<RealizationsPicturesTop />
				</div>
			</div>

			<div className="flex justify-center mt-[120px] pb-[80px]">
				<CustomButton navlink path="/kontakt" className="min-w-[230px]">
					Skontaktuj się z nami
				</CustomButton>
			</div>

			{/* MOTTO SECTION */}
			<div className="bg-[#22403E] h-[550px] relative flex justify-center">
				<p className="w-full h-full flex justify-center items-center text-[#EEE9E2] text-[86px] font-light hover:scale-125 transition duration-500 ease-in-out">
					Piękno ujarzmione
				</p>
				<div className="flex justify-center absolute bottom-[100px]">
					<CustomButton navlink path="/oferta" className="min-w-[230px]">
						Zobacz ofertę
					</CustomButton>
				</div>
			</div>

			{/* IMAGES LIST BOTTOM */}
			<div className="mt-[80px] flex">
				<div className="w-[232px] flex justify-end pr-[50px]">
					<div className="w-[2px] bg-[#463E46]"></div>
				</div>
				<div className='w-full flex justify-center'>
					<RealizationsPicturesBottom />
				</div>
			</div>

			{/* BUTTON */}
			<div className="flex justify-center mt-[120px] pb-[80px]">
				<CustomButton navlink path="/kontakt" className="min-w-[230px]">
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
