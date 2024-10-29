'use client'
// modules
import { Button } from '@/components/ui/button'

type CustomButtonProps = {
	onClick?: () => void
}

export default function CustomButton({ onClick }: CustomButtonProps) {
	return (
		<Button
			onClick={onClick}
			className="bg-accent text-md text-menuTextLight w-full rounded-l-full rounded-br-full py-6 hover:bg-accentHover"
		>
			Zobacz realizacje
		</Button>
	)
}
