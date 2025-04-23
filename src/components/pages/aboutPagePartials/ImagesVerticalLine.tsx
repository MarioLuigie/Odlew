import Image from 'next/image'
import { AboutImages } from '@/lib/constants/images'

export default function ImagesVerticalLine() {
	return (
		<div className="h-[685px] w-full flex">
			<div className="w-[2px] h-full bg-[#463E46]"></div>
			<div className="relative h-full w-full">
				<div className="z-40 absolute md:bottom-[47px] md:left-[56px] 3xl:left-[130px] w-[245px] h-[165px]">
					<Image
						src={AboutImages.offer_1.path}
						alt={AboutImages.offer_1.alt}
						fill
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="absolute md:top-[166px] md:right-[40px] 3xl:right-[130px] w-[270px] h-[400px]">
					<Image
						src={AboutImages.offer_2.path}
						alt={AboutImages.offer_2.alt}
						fill
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	)
}
