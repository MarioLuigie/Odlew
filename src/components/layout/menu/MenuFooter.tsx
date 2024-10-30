// modules
import Link from 'next/link'
// lib
import { MenuContent, MenuContentPlus } from '@/lib/constants'
import { capitalizeFirstLetter } from '@/lib/utils'

function MenuContentItem({ item }: { item: MenuContentItem }) {
	return (
		<Link href={item.path} key={item.label} className="w-full">
			<li className="w-full border-b-[1px] py-2">
				<p className="text-menuTextLight w-full text-[22px] text-left">
					{capitalizeFirstLetter(item.label)}
				</p>
			</li>
		</Link>
	)
}

export default function MenuFooter() {
	return (
		<nav className="w-full ml-8">
			<ul className="flex flex-col gap-2 items-end">
				{MenuContent.map((item) => (
					<MenuContentItem item={item} key={item.label} />
				))}
        {MenuContentPlus.map((item) => (
          <MenuContentItem item={item} key={item.label} />
        ))}
			</ul>
		</nav>
	)
}
