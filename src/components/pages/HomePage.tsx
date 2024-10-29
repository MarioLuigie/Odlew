//components
import CompanyName from '@/components/content/CompanyName'
import CustomButton from '@/components/shared/CustomButton'

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<section
				id="#home"
				className="h-customScreen flex flex-col justify-end gap-4 p-4 pb-28 homepage-background"
			>
				<CompanyName mode="light" className="h-auto" />
				<CustomButton />
			</section>
			<section id="#about" className='h-[200px]'>ABOUT</section>
			<section id="#offer" className='h-[200px]'>OFFER</section>
			<section id="#realizations" className='h-[200px]'>REALIZATIONS</section>
			<section id="#contact" className='h-[200px]'>CONTACT</section>
		</div>
	)
}
