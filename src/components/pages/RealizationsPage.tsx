import TextContent from '@/components/shared/TextContent'
import Title from '@/components/shared/Title'
import Image from 'next/image'

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

				<div className="flex flex-col gap-3">
					<div className="w-full min-h-[300px] bg-mottoBg rounded-lg flex justify-center items-center">
						<Image
							src=""
							alt=""
							width={1000}
							height={1000}
							className="h-full object-cover rounded-lg"
						/>
					</div>
					<div className='flex flex-col'>
						<p className='font-semibold'>Józef Polewka</p>
						<p className='text-zinc-500'>Praczka</p>
					</div>
				</div>
        
			</div>
		</div>
	)
}
