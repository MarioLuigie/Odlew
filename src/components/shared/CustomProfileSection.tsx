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
		<div className={cn('bg-yellow-400 dp:h-full flex flex-col pb-8 dp:pb-0 dp:flex-row dp:border-b-[1px] border-zinc-400', className)}>
			{picture && (
				<div className='dp:w-1/2 dp:h-full dp:bg-red-500'>
					<Image
						src={picture.path}
						alt={picture.alt}
						width={2400}
						height={2400}
						className='dp:object-fill mt-4 dp:mt-0'
					/>
				</div>
			)}
			<div className='dp:w-1/2 bg-blue-300'>{children}</div>
		</div>
	)
}
