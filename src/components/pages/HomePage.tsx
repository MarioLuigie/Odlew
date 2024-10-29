//components
import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<section
				id="#home"
				className="h-customScreen flex flex-col justify-end gap-4 p-4 pb-12 homepage-background"
			>
				<CompanyName mode="light" className="h-auto" />
				<CustomButton />
			</section>
			<section id="#about">ABOUT</section>
			<section id="#offer">OFFER</section>
			<section id="#realizations">REALIZATIONS</section>
			<section id="#contact">CONTACT</section>
		</div>
	)
}
