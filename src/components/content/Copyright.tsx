// lib
import { App } from '@/lib/constants/texts'

export default function Copyright() {
	return (
		<div className="w-full pt-2">
			<small className="flex justify-center text-menuTextLight w-full">
				&copy; {App.NAME}
				{', '}
				{App.SUBNAME} 2024
			</small>
		</div>
	)
}
