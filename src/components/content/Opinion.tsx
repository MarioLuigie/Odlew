'use client'
// modules
import dynamic from 'next/dynamic'
// lib
import { IOpinion } from '@/lib/models/opinion.model'
import { cn, formatDate } from '@/lib/utils'

const ReactStars = dynamic(() => import('react-stars'), { ssr: false })

export default function Opinion({
	opinion,
	className,
}: {
	opinion: IOpinion
	className?: string
}) {
	return (
		<div
			className={cn(
				'p-4 pb-12 min-h-[180px] bg-opinionBg rounded-3xl text-textDark',
				className
			)}
		>
			{/* STARS RATING */}
			<div className="pb-4">
				<ReactStars
					count={5}
					value={opinion.stars}
					edit={false}
					size={24}
					color1={'#bebebe'}
					color2={'#E36A00'}
				/>
			</div>

			{/* CLIENT NAME AND DATE */}
			<div className="flex justify-between w-full pb-6 text-sm text-textSecondary">
				<p>{opinion?.name}</p>
				<p>{opinion.createdAt ? formatDate(opinion.createdAt) : 'Brak daty'}</p>
			</div>

			{/* OPINION */}
			<div className="text-sm">
				<p>{opinion?.opinion}</p>
			</div>
		</div>
	)
}
