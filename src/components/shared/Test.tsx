'use client'
import { toastSuccess } from '@/lib/utils/toasts'

export default function Test() {
	return (
		<div className="bg-zinc-400 min-h-[200px] p-4 flex flex-col">
			<small className="mb-2 p-2 text-zinc-600 bg-zinc-200 rounded-sm">
				Use only for test your code!
			</small>
			<p className="bg-zinc-200 rounded-sm p-2">Actions:</p>
			<div className='p-2 mt-2 rounded-md'>
				<div className="py-4 px-2 flex gap-3 items-center border-b-[1px] border-zinc-500">
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
		</div>
	)
}
