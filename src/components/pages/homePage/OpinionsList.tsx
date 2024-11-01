import { Opinions } from "@/lib/constants"
import Opinion from '@/components/pages/homePage/Opinion'

export default function OpinionsList() {
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