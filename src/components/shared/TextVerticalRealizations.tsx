type TextVerticalRealizationsProps = {
	children: React.ReactNode
	right?: boolean
}

export default function TextVerticalRealizations({
	children,
	right = true,
}: TextVerticalRealizationsProps) {
	return (
		<div className="h-[470px]">
			{right ? (
				<div className="h-full relative">
					<div className="w-[2px] h-full bg-[#463E46]"></div>
					<p className="absolute left-[-52px] top-[80px] rotate-90 whitespace-nowrap text-[54px] text-[#383638]">{children}</p>
				</div>
			) : (
				<div className="h-full relative">
					<p className="absolute left-[-270px] top-[220px] -rotate-90 whitespace-nowrap text-[54px] text-[#383638]">{children}</p>
					<div className="w-[2px] h-full bg-[#463E46]"></div>
				</div>
			)}
		</div>
	)
}
