import TextContent from '@/components/shared/TextContent'
import Title from '@/components/shared/Title'
import JozefProfile from '@/components/pages/aboutPagePartials/JozefProfile'
import SzymonProfile from '@/components/pages/aboutPagePartials/SzymonProfile'
import AntoniProfile from '@/components/pages/aboutPagePartials/AntoniProfile'
import Image from 'next/image'
import { AboutImages } from '@/lib/constants/images'

export default function AboutPage() {
	return (
		<div className="min-h-customScreen bg-background">
			<Image
				src={AboutImages.team.path}
				alt={AboutImages.team.alt}
				width={2400}
				height={2400}
        className='w-full'
			/>
			<div className="bg-menuTopBg p-5">
				<Title className="text-textLight pb-5">Nasz Zespół</Title>
				<TextContent className="text-textLight">
					Dzięki więzom rodzinnym doskonale się rozumiemy. Nasza współpraca
					opiera się na wzajemnym zaufaniu i szacunku.
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
