'use client'
// modules
import dynamic from 'next/dynamic'
// lib
import { IOpinion } from '@/lib/models/opinion.model'
import { cn, formatDate } from '@/lib/utils'
// components
import OpinionManipulation from '@/components/content/manipulations/OpinionManipulation'

const ReactStars = dynamic(() => import('react-stars'), { ssr: false })

export default function Opinion({
	opinion,
	className,
	isAdmin,
}: {
	opinion: IOpinion
	className?: string
	isAdmin: boolean
}) {
	return (
		<div
			className={cn(
				'p-4 pb-12 min-h-[180px] bg-transparent rounded-3xl',
				className
			)}
		>
			{/* STARS RATING */}
			<div className="pb-4 flex justify-between items-center">
				<ReactStars
					count={5}
					value={opinion.stars}
					edit={false}
					size={24}
					color1={'#777777'}
					color2={'#AA5002'}
				/>
				{isAdmin && (
					<OpinionManipulation opinionId={opinion._id} />
				)}
			</div>

			{/* CLIENT NAME AND DATE */}
			<div className="flex w-full pb-6 text-sm font-semibold text-[#87827E]">
				<p>{opinion?.name}</p>
				<p className='pl-5 text-sm font-semibold'>
					dodano: {opinion.createdAt ? formatDate(opinion.createdAt, 'date') : 'Brak daty'}
				</p>
			</div>

			{/* OPINION */}
			<div className="text-lg font-medium text-[#454345]">
				<p>{opinion?.opinion}</p>
			</div>
		</div>
	)
}
