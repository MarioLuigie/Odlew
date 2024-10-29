//components
import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'

export default function HomePage() {
	return (
		<div className="h-homePage p-6 flex items-end homepage-background">
			<div className='flex flex-col gap-3 pb-16'>
				<CompanyName mode="light" className="h-auto" />
				<CustomButton />
			</div>
		</div>
	)
}
