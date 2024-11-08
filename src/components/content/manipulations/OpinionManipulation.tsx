// modules
import { Delete } from 'lucide-react'
import { Ellipsis } from 'lucide-react'
// lib
import { handleDeleteOpinion } from "@/lib/handlers/opinion.handlers"
// components
import CustomManipulation from "@/components/shared/CustomManipulation"
import { OpinionManipulationType } from '@/lib/types'

export default function OpinionManipulation() {

  const manipulations: OpinionManipulationType[] = [
    {
      label: 'Delete',
      icon: <Delete />,
      onClick: handleDeleteOpinion,
    },
  ]

  return (
    <CustomManipulation trigger={<Ellipsis />} manipulations={manipulations} />
  )
}