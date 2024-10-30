// modules
import Link from 'next/link'
// lib
import { MenuFooterContent } from '@/lib/constants'
import { capitalizeFirstLetter } from '@/lib/utils'

function MenuContentItem({ item }: { item: MenuContentItem }) {
	return (
		<div className="w-full border-b-[1px]">
			<Link href={item.path} key={item.label} className="inline-block pr-3">
				<li className="py-2">
					<p className="text-menuTextLight text-[20px]">
						{capitalizeFirstLetter(item.label)}
					</p>
				</li>
			</Link>
		</div>
	)
}

export default function MenuFooter() {
	return (
		<nav className="w-full ml-8">
			<ul className="flex flex-col gap-2">
				{MenuFooterContent.map((item) => (
					<MenuContentItem item={item} key={item.label} />
				))}
			</ul>
		</nav>
	)
}
