// components
import CustomButton from '@/components/shared/CustomButton'
import Drop from '@/components/shared/Drop'
import SVG from '@/components/shared/SVG'
import { Icons } from '@/lib/constants/icons'

export default function Motto() {
	return (
		<section className="flex flex-col bg-background scroll-mt-header">		
			{/* MOTTO */}
			<div className="h-customScreen md:max-h-[820px] relative p-[40px] flex flex-col justify-center items-center bg-mottoBg_grey hover:bg-mottoBg transition-colors duration-1000">
				<div className="w-full flex flex-col justify-center items-center text-[32px] leading-[120px] md:text-[76px] md:leading-[150px] font-light text-textLight text-center md:text-start">
					<div className="w-full 3xl:px-[170px]">
						<div className="w-full">
							<p>Są rzeczy trudne</p>
						</div>
						<div className="w-full flex justify-center">
							<Drop
								color="#E36A00"
								corner="bottom-right"
								variant="outline"
								className="w-[60px] h-[60px] -rotate-45 cursor-pointer"
							>
								<SVG src={Icons.PLAY_SOLID.path} className='rotate-45 translate-x-[4px] translate-y-[4px]'/>
							</Drop>
						</div>
						<div className="w-full text-end">
							<p>ale nie niemożliwe</p>
						</div>
					</div>
				</div>

				<div className="w-full flex justify-center absolute bottom-[50px] px-6">
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
