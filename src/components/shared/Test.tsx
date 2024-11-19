'use client'
import { toastSuccess } from '@/lib/utils/toasts'
import Drop from './Drop'
import { MoveDownRight } from 'lucide-react'

export default function Test() {
	return (
		<div className="bg-zinc-400 min-h-[200px] p-4 pb-8 flex flex-col relative">
			<small className="p-2 text-zinc-600">
				Console Only for developers!
			</small>

			{/* ACTIONS */}
			<p className="bg-zinc-200 rounded-sm p-2 mt-2">Actions:</p>
			<div className="p-2 mt-2 rounded-md">
				<div className="py-4 px-2 flex gap-3 items-center">
					<p>call for a toast</p>
					<button
						className="py-2 px-4 bg-blue-400 border-[1px] border-blue-800 rounded-sm"
						onClick={() =>
							toastSuccess(
								'Twoja opinia została pomyślnie dodana.',
								'Dodawanie opini.'
							)
						}
					>
						TOAST
					</button>
				</div>
			</div>

			{/* COMPONENTS */}
			<p className="bg-zinc-200 rounded-sm p-2 mt-2">Components:</p>
			<div className="p-4 flex gap-3 items-center">
				<p>Drop.tsx</p>
				<Drop variant="fill" color='#eecd13' corner="bottom-right">
					<MoveDownRight />
				</Drop>
			</div>

			<small className="text-zinc-600 py-2 absolute bottom-0 right-0 w-full flex justify-center items-center">
				&copy; ARWcode 2024. All rights reserved.
			</small>
		</div>
	)
}
