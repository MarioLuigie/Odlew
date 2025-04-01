import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'
import { Images } from '@/lib/constants/images'
import Image from 'next/image'

export default function Start() {
	return (
		<section className="w-full dp:flex pb-[70px] dp:bg-background relative">
			{/* DESKTOP */}
			<div className="hidden dp:flex dp:flex-col dp:justify-center dp:items-end dp:w-1/2 dp:bg-backgroundDark dp:p-8">
				<div className="hidden dp:text-textDark dp:flex dp:flex-col w-[100%]">
					<div className="w-[100%]">
						<p className="text-[30px] xl:text-[54px] dp:text-right pr-20 pb-8">
							P.S. ODLEW
						</p>
					</div>
					<div className="w-[100%]">
						<p className="text-[65px] xl:text-[68px] leading-[75px] xl:leading-[80px] w-[439px] dp:text-left pl-6">
							Odlewnia artystyczna
						</p>
					</div>
				</div>
				<div className="w-[100%] flex justify-end pr-20">
					<CustomButton navlink path="/realizacje" className="mt-32">
						Zobacz realizacje
					</CustomButton>
				</div>
			</div>

			{/* MOBILE */}
			<div
				id="home"
				className="h-customScreen p-5 dp:px-10 dp:pb-28 flex flex-col justify-end dp:w-1/2 dp:justify-end dp:items-start gap-4 homepage-background scroll-mt-header"
			>
				<CompanyName mode="light" className="dp:hidden" />
				<CustomButton navlink path="/realizacje" className="dp:hidden">
					Zobacz realizacje
				</CustomButton>
			</div>

			<div className="hidden dp:block absolute bottom-0 left-[40px]">
				<div className="bg-red-300 w-[230px]">
					<Image
						src={Images.START.path}
						alt={Images.START.path}
						width={512}
						height={512}
						className="w-full"
					/>
				</div>
			</div>
		</section>
	)
}
