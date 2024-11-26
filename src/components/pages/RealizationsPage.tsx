import TextContent from '@/components/shared/TextContent'
import Title from '@/components/shared/Title'
import Image from 'next/image'
import { ProductImages } from '@/lib/constants/images'

export default function RealizationsPage() {
	return (
		<div className="min-h-customScreen bg-background">
			<div className="bg-menuTopBg p-5">
				<Title className="text-textLight pb-5">Nasze Realizacje</Title>
				<TextContent className="text-textLight">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Dignissimos eos sequi laborum explicabo voluptas eaque,
					exercitationem error ipsum praesentium? Ipsa, ut.
				</TextContent>
			</div>
			<div className="flex flex-col gap-3 p-5">
				{ProductImages.map((productImage, i) => (
					<div className="flex flex-col gap-2" key={i}>
						<div className="w-full min-h-[300px] bg-mottoBg rounded-lg flex justify-center items-center">
							<Image
								src={productImage.image.path}
								alt={productImage.image.alt}
								width={1000}
								height={1000}
								className="h-full object-cover rounded-lg"
							/>
						</div>
						<div className="flex flex-col pb-6">
							<p className="font-semibold">{productImage.author}</p>
							<p className="text-zinc-500 text-[14px]">{productImage.title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
