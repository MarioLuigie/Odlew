// modules
// import Image from 'next/image'
import { Loader } from 'lucide-react'
// components
import CustomButton from '@/components/shared/CustomButton'

interface SubmitButtonProps {
	isLoading?: boolean
	className?: string
	children: React.ReactNode
}

export default function SubmitButton({
	isLoading=false,
	className,
	children,
}: SubmitButtonProps) {
	return (
		<CustomButton
			disabled={isLoading}
			className={className}
		>
			{isLoading ? (
				<div className="flex items-center gap-4">
					{/* <Image
						src={Icons.LOADER_ICON.path}
						alt={Icons.LOADER_ICON.alt}
						width={24}
						height={24}
						className="animate-spin"
						priority
					/> */}
          <Loader className='animate-spin'/>
					Loading...
				</div>
			) : (
				<p className='text-[16px]'>{children}</p>
			)}
		</CustomButton>
	)
}