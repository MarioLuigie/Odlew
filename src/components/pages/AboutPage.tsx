// components
import Offer from '@/components/pages/aboutPagePartials/Offer '
import OpinionsContainer from '@/components/pages/aboutPagePartials/OpinionsContainer'
import ProfilesContainer from '@/components/pages/aboutPagePartials/ProfilesContainer'
import Contact from '@/components/pages/homePagePartials/Contact'


export default function AboutPage() {

	return (
		<div>
			<ProfilesContainer />
			<Offer />
			<OpinionsContainer />
			<Contact />
		</div>
	)
}


