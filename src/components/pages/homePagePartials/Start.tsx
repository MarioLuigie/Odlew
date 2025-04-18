import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'
import { Images } from '@/lib/constants/images'
import Image from 'next/image'

export default function Start() {
	return (
		<section className="w-full lg:flex pb-[70px] lg:bg-background relative">
			{/* DESKTOP */}
			<div className="h-customScreen lg:max-h-[820px] hidden lg:flex lg:flex-col lg:justify-center lg:items-end lg:w-1/2 lg:bg-backgroundDark lg:p-8">
				<div className="hidden lg:text-textDark lg:flex lg:flex-col w-[100%]">
					<div className="w-[100%] bg-yellow-300">
						<p className="text-[54px] lg:text-right pr-20 3xl:pr-40 pb-8">
							P.S. ODLEW
						</p>
					</div>
					<div className="w-[100%]">
						<p className="text-[68px] xl:text-[68px] leading-[80px] xl:leading-[80px] w-[439px] md:text-left pl-6">
							Odlewnia artystyczna
						</p>
					</div>
				</div>
				<div className="w-[100%] flex justify-end xl:pr-20">
					<CustomButton navlink path="/realizacje" className="mt-32">
						Zobacz realizacje
					</CustomButton>
				</div>
			</div>

			{/* MOBILE */}
			<div
				id="home"
				className="h-customScreen lg:max-h-[820px] p-5 lg:px-10 lg:pb-28 flex flex-col justify-end lg:w-1/2 lg:justify-end lg:items-start gap-4 homepage-background scroll-mt-header"
			>
				<CompanyName mode="light" className="lg:hidden" />
				<CustomButton navlink path="/realizacje" className="lg:hidden">
					Zobacz realizacje
				</CustomButton>
			</div>

			<div className="hidden lg:block absolute bottom-0 left-[40px]">
				<div className="w-[230px] h-[300px] bg-transparent">
					<Image
						src={Images.START.path}
						alt={Images.START.path}
						width={512}
						height={668}
						className="w-full"
					/>
				</div>
			</div>
		</section>
	)
}
