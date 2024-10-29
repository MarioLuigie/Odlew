'use client'

import { Button } from '@/components/ui/button'

export default function CustomButton() {
	return (
		<Button
			onClick={() => console.log('Button clicked')}
			className="bg-accent text-md text-menuTextLight w-full rounded-l-full rounded-br-full py-6 hover:bg-accentHover"
		>
			Zobacz realizacje
		</Button>
	)
}
