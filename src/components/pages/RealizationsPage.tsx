import Title from '@/components/shared/Title'
import Image from 'next/image'
import { ProductImages, Images } from '@/lib/constants/images'
import CustomButton from '../shared/CustomButton'

export default function RealizationsPage() {
	return (
		<div className="min-h-customScreen bg-background">
			<Image
				src={Images.REALIZATIONS.path}
				alt={Images.REALIZATIONS.alt}
				width={1000}
				height={1000}
				className="min-h-[300px] object-cover rounded-lg"
			/>
			<div className="bg-background p-5 py-8">
				<Title className="text-textDark text-center">
					Nasze Realizacje
				</Title>
			</div>
			<div className="flex flex-col gap-3 p-5">
				{ProductImages.map((productImage, i) => (
					<div className="flex flex-col gap-2" key={i}>
						<div className="w-full min-h-[300px] bg-backgroundDark rounded-lg flex justify-center items-center">
							<Image
								src={productImage.image.path}
								alt={productImage.image.alt}
								width={1000}
								height={1000}
								className="min-h-[300px] object-cover rounded-lg"
							/>
						</div>
						<div className="flex flex-col pb-6">
							<p className="font-semibold">{productImage.author}</p>
							<p className="text-zinc-500 text-[14px]">
								{productImage.title}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="p-5 pb-16">
				<CustomButton navlink path="/kontakt">
					Skontaktuj się z nami
				</CustomButton>
			</div>
		</div>
	)
}
