// components
import CustomButton from '@/components/shared/CustomButton'
import Drop from '@/components/shared/Drop'

export default function Motto() {
	return (
		<section className="min-h-customScreen flex flex-col bg-background scroll-mt-header">
			{/* MOTTO */}
			<div className="dp:h-[820px] relative p-[40px] h-customScreen flex flex-col justify-center items-center bg-mottoBg_grey hover:bg-mottoBg transition-colors duration-1000">
				<div className="w-full flex flex-col justify-center items-center text-[30px] leading-[70px] dp:text-[76px] dp:leading-[150px] font-light text-textLight">
					<div className="w-full">
						<div className="w-full">
							<p>Są rzeczy trudne</p>
						</div>
						<div className="w-full flex justify-center">
							<Drop
								color="#E36A00"
								corner="bottom-right"
								variant="outline"
								className="w-[60px] h-[60px] -rotate-45"
							/>
						</div>
						<div className="w-full text-end">
							<p>ale nie niemożliwe</p>
						</div>
					</div>
				</div>

				<div className="w-full flex justify-center absolute bottom-[50px]">
					<CustomButton
						className="bg-transparent border-2 border-[#D06101] shadow-none text-[#D06101] hover:text-zinc-50 hover:bg-[#D06101]"
						navlink
						path="/realizacje"
					>
						Zobacz więcej
					</CustomButton>
				</div>
			</div>
		</section>
	)
}
