type TextVerticalHowWorkProps = {
	children: React.ReactNode
}

export default function TextVerticalHowWork({ children }: TextVerticalHowWorkProps) {
	return (
		<div className="h-[400px] w-[80px]">
			<div className="h-full relative">
				<div className="w-[2px] h-full bg-[#463E46]"></div>
				<p className="absolute left-[-140px] top-[165px] rotate-90 whitespace-nowrap text-[54px]">
					{children}
				</p>
			</div>
		</div>
	)
}
