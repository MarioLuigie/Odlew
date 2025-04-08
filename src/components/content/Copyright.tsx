// lib
import { App } from '@/lib/constants/texts'

export default function Copyright() {
	return (
		<div className="w-full">
			<small className="flex justify-start text-textLight w-full">
				&copy; {App.NAME}
				{', '}
				{App.SUBNAME} 2024
			</small>
		</div>
	)
}
