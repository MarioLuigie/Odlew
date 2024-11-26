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
		<div className={cn('flex flex-col pb-8', className)}>
			{picture && (
				<div>
					<Image
						src={picture.path}
						alt={picture.alt}
						width={2400}
						height={2400}
					/>
				</div>
			)}
			<div>{children}</div>
		</div>
	)
}
