// modules
import Link from 'next/link'

// lib
import { MenuContent as menu } from '@/lib/constants'

export default function Menu() {
	return (
		<ul>
			{menu.map((item) => (
				<Link href={item.path} key={item.label}>
					<li>
						<p className="text-white">{item.label}</p>
					</li>
				</Link>
			))}
		</ul>
	)
}
