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
				' md:h-full flex flex-col pb-8 md:pb-0 md:flex-row md:border-b-[1px] border-zinc-400',
				className
			)}
		>
			{picture && (
				<div className="md:w-1/2 md:h-full">
					<Image
						src={picture.path}
						alt={picture.alt}
						width={2400}
						height={2400}
						className="md:object-cover md:h-full mt-4 md:mt-0"
					/>
				</div>
			)}
			<div className="md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
				{children}
			</div>
		</div>
	)
}
