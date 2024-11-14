// modules
import { Delete } from 'lucide-react'
import { Ellipsis } from 'lucide-react'
// lib
import { handleDeleteOpinion } from '@/lib/handlers/opinion.handlers'
// components
import CustomManipulation from '@/components/shared/CustomManipulation'
import { OpinionManipulationType } from '@/lib/types'

export default function OpinionManipulation({
	opinionId,
}: {
	opinionId: string
}) {
	const manipulations: OpinionManipulationType[] = [
		{
      _id: opinionId,
      name: 'delete',
			label: 'Usuń opinię',
			icon: <Delete />,
			onClick: handleDeleteOpinion,
		},
	]

	return (
		<CustomManipulation
			trigger={<Ellipsis />}
			manipulations={manipulations}
		/>
	)
}
