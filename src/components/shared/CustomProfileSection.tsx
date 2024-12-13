// modules
import Image from 'next/image'
import { cn } from '@/lib/utils'

type CustomProfileSectionProps = {
	children: React.ReactNode
	picture?: Picture
	className?: string
}

export default function CustomProfileSection({
	children,
	picture,
	className,
}: CustomProfileSectionProps) {
	return (
		<div
			className={cn(
				'dp:h-full flex flex-col pb-8 dp:pb-0 dp:flex-row dp:border-b-[1px] border-zinc-400',
				className
			)}
		>
			{picture && (
				<div className="dp:w-1/2 dp:h-full">
					<Image
						src={picture.path}
						alt={picture.alt}
						width={2400}
						height={2400}
						className="dp:object-cover dp:h-full mt-4 dp:mt-0"
					/>
				</div>
			)}
			<div className="dp:w-1/2 dp:flex dp:flex-col dp:items-center dp:justify-center">
				{children}
			</div>
		</div>
	)
}
