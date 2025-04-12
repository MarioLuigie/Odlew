type TextVerticalHowWorkProps = {
	children: React.ReactNode
}

export default function TextVerticalTeam({ children }: TextVerticalHowWorkProps) {
	return (
		<div className="h-[450px] w-[80px] lg:mr-[60px] xl:mr-[100px]">
			<div className="h-full relative">
				<div className="w-[2px] h-full bg-[#DEDCD8]"></div>
				<p className="absolute left-[-115px] top-[250px] rotate-90 whitespace-nowrap text-[54px] text-[#EEE9E2]">
					{children}
				</p>
			</div>
		</div>
	)
}
