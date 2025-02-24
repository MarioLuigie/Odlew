// lib
import { getOpinions } from '@/lib/actions/opinion.actions'
// components
import Opinions from '@/components/pages/aboutPagePartials/Opinions'
import { checkIsAdmin } from '@/lib/utils/services'

export default async function OpinionsContainer() {
  const { data: opinions } = await getOpinions()
	const isAdmin = await checkIsAdmin()

  return (
    <div>
        <Opinions opinions={opinions} isAdmin={isAdmin} />
    </div>
  )
}
