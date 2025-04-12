'use client'
// modules
import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Lightbox from 'yet-another-react-lightbox'
import Image from 'next/image'
// lib
import { HomeAboutImages } from '@/lib/constants/images'
// styles
import 'yet-another-react-lightbox/styles.css'

export default function AboutPictures() {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div>
			<ScrollArea className="hidden md:flex md:h-[820px] rounded-none border-l-[2px]">
				<div className="flex flex-col gap-6 items-end min-w-[300px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[650px]">
					{HomeAboutImages.map((image, i) => (
						<div
							key={i}
							className="lg:w-[80%] xl:w-[80%]"
							onClick={() => {
								setCurrentIndex(i)
								setOpen(true)
							}}
						>
							<Image
								key={i}
								src={image.path}
								alt={image.alt}
								width={2400}
								height={2400}
								priority
								className="object-cover grayscale contrast-75 hover:grayscale-0 hover:contrast-100 transition duration-500 ease-in-out cursor-pointer"
								style={{
									willChange: 'filter',
								}}
							/>
						</div>
					))}
				</div>
			</ScrollArea>

			<Lightbox
				open={open}
				close={() => setOpen(false)}
				index={currentIndex}
				slides={HomeAboutImages.map((aboutImage) => ({
					src: aboutImage.path,
					alt: aboutImage.alt,
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

// export default function AboutPictures() {
//   const [open, setOpen] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0)

//   return (
//     <div>
//       {/* Grid dla ProductImages z wyrównaniem wysokości */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
//         {ProductImages.map((productImage, i) => (
//           <div
//             className="flex flex-col gap-2 h-full cursor-pointer"
//             key={i}
//             onClick={() => {
//               setCurrentIndex(i)
//               setOpen(true)
//             }}
//           >
//             <div className="w-full min-h-[300px] md:min-h-[800px] bg-backgroundDark rounded-lg flex justify-center items-center relative">
//               <Image
//                 src={productImage.image.path}
//                 alt={productImage.image.alt}
//                 fill
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//             <div className="flex flex-col pb-6 flex-grow">
//               <p className="font-semibold">{productImage.author}</p>
//               <p className="text-zinc-500 text-[14px]">
//                 {productImage.title}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         index={currentIndex}
//         slides={ProductImages.map((productImage) => ({
//           src: productImage.image.path,
//           alt: productImage.image.alt,
//         }))}
//         controller={{ closeOnBackdropClick: true }}
//         on={{
//           view: ({ index }) => setCurrentIndex(index),
//         }}
//       />
//     </div>
//   )
// }
