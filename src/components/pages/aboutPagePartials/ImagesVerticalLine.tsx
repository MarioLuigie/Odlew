export default function ImagesVerticalLine() {
	return (
		<div className="h-[685px] w-full flex">
			<div className="w-[2px] h-full bg-[#463E46]"></div>
			<div className="relative h-full w-full">
				<div className="absolute bottom-[47px] left-[56px] w-[245px] h-[165px] border-2 border-black">offer-01.jpg</div>
				<div className="absolute top-[166px] right-[40px] w-[270px] h-[400px] border-2 border-black">offer-02.jpg</div>
			</div>
		</div>
	)
}
