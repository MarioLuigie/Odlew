type TextVerticalProcessProps = {
	children: React.ReactNode
	right?: boolean
}

export default function TextVerticalProcess({
	children,
	right = true,
}: TextVerticalProcessProps) {
	return (
		<div className="h-[500px] lg:h-[604px]">
			{right ? (
				<div className="h-full relative">
					<div className="w-[2px] h-full bg-[#463E46]"></div>
					<p className="absolute md:left-[0] md:top-[0] lg:left-[-52px] lg:top-[80px] rotate-90 whitespace-nowrap md:text-[32px] lg:text-[54px] text-[#383638]">{children}</p>
				</div>
			) : (
				<div className="h-full relative">
					<p className="absolute md:left-[-165px] md:top-[200px] lg:left-[-305px] lg:top-[315px] -rotate-90 whitespace-nowrap md:text-[32px] lg:text-[54px] text-[#383638]">{children}</p>
					<div className="w-[2px] h-full bg-[#463E46]"></div>
				</div>
			)}
		</div>
	)
}