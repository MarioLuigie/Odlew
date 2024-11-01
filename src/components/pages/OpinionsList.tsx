'use client'

import { Opinions } from "@/lib/constants"
import Opinion from '@/components/pages/Opinion'

export default function OpinionsList() {
  console.log('Opinions', Opinions)

  return (
    <ul className="flex flex-col gap-4">
      {Opinions.map((opinion, i) => (
        <li key={i}>
          <Opinion opinion={opinion} />
        </li>
      ))}
    </ul>
  )
}