import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'
import { Images } from '@/lib/constants/images'
import Image from 'next/image'

export default function Start() {
	return (
		<section className="w-full md:flex pb-[70px] md:bg-background relative">
			{/* DESKTOP */}
			<div className="h-customScreen md:max-h-[820px] hidden md:flex md:flex-col md:justify-center md:items-end md:w-1/2 md:bg-backgroundDark md:p-8">
				<div className="hidden md:text-textDark md:flex md:flex-col w-[100%]">
					<div className="w-[100%]">
						<p className="text-[30px] xl:text-[54px] md:text-right pr-20 pb-8">
							P.S. ODLEW
						</p>
					</div>
					<div className="w-[100%]">
						<p className="text-[65px] xl:text-[68px] leading-[75px] xl:leading-[80px] w-[439px] md:text-left pl-6">
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
				className="h-customScreen md:max-h-[820px] p-5 md:px-10 md:pb-28 flex flex-col justify-end md:w-1/2 md:justify-end md:items-start gap-4 homepage-background scroll-mt-header"
			>
				<CompanyName mode="light" className="md:hidden" />
				<CustomButton navlink path="/realizacje" className="md:hidden">
					Zobacz realizacje
				</CustomButton>
			</div>

			<div className="hidden md:block absolute bottom-0 left-[40px]">
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
