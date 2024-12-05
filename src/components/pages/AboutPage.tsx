// modules
import Image from 'next/image'
// lib
import { AboutImages } from '@/lib/constants/images'
// components
import TextContent from '@/components/shared/TextContent'
import Title from '@/components/shared/Title'
import JozefProfile from '@/components/pages/aboutPagePartials/JozefProfile'
import SzymonProfile from '@/components/pages/aboutPagePartials/SzymonProfile'
import AntoniProfile from '@/components/pages/aboutPagePartials/AntoniProfile'

export default function AboutPage() {
	return (
		<div className="min-h-customScreen bg-background">
			<Image
				src={AboutImages.team.path}
				alt={AboutImages.team.alt}
				width={2400}
				height={2400}
				className="w-full"
			/>
			<div className="bg-menuTopBg p-5 pb-10">
				<Title className="text-textLight pb-5">Nasz Zespół</Title>
				<TextContent className="text-textLight">
					Dzięki więzom rodzinnym nasz zespół doskonale się rozumie, co
					przekłada się na efektywną i harmonijną współpracę. Fundamentem
					naszych działań jest wzajemne zaufanie, które pozwala nam
					podejmować wspólne decyzje z pełnym przekonaniem. Szanujemy
					nawzajem swoje pomysły i perspektywy, co wzmacnia naszą relację
					zawodową. Taka atmosfera sprzyja tworzeniu wyjątkowych projektów
					i osiąganiu wspólnych celów.
				</TextContent>
			</div>
			<JozefProfile />
			<SzymonProfile />
			<AntoniProfile />
		</div>
	)
}

{
	/* WORKING PROCESS - HOW DO WE WORK? */
}
