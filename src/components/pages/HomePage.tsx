//components
import CompanyName from '@/components/content/CompanyName'

export default function HomePage() {
	return (
		<div className="h-homePage p-4 flex items-end homepage-background">
			<CompanyName
				mode="light"
				className="h-auto"
			/>
		</div>
	)
}
