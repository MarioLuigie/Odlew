import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'

export default function Start() {
	return (
		<div
			id="home"
			className="h-customScreen p-5 dp:px-10 pb-28 flex flex-col justify-end dp:justify-end dp:items-start gap-4 homepage-background scroll-mt-header"
		>
			<CompanyName
				mode="light"
				className="dp:hidden"
			/>
      <div className='hidden dp:text-textLight dp:flex dp:flex-col'>
        <p className='text-[50px]'>P.S Odlew</p>
        <p className='text-[95px]'>Odlewnia Artystyczna</p>
      </div>
			<CustomButton
				navlink
				path="/realizacje"
				className="dp:max-w-[240px]"
			>
				Zobacz realizacje
			</CustomButton>
		</div>
	)
}
