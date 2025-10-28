// lib
import { App } from '@/lib/constants/texts'

export default function Copyright() {
	return (
		<div className="w-full">
			<small className="flex justify-center md:justify-end items-center text-textLight w-full">
			<span className="text-lg font-thin mr-1">&copy;</span> {App.NAME}
				{', '}
				{App.SUBNAME} 2024
			</small>
		</div>
	)
}
