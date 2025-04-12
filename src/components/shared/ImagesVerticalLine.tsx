type ImagesVerticalLineProps = {
	children: React.ReactNode
}

export default function ImagesVerticalLine({ children }: ImagesVerticalLineProps) {
	return (
		<div className="h-[780px] w-[80px]">
			<div className="h-full relative">
				<div className="w-[2px] h-full bg-[#383638]"></div>
				<p className="absolute left-[-115px] top-[250px] rotate-90 whitespace-nowrap text-[54px] text-[#383638]">
					{children}
				</p>
			</div>
		</div>
	)
}
