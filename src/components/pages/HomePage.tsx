//components
import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<div className="h-homePage flex flex-col justify-end gap-4 p-4 pb-12 homepage-background">
				<CompanyName mode="light" className="h-auto" />
				<CustomButton />
			</div>
			<div className="bg-red-300 w-full h-[120px]">SECTION</div>
		</div>
	)
}
