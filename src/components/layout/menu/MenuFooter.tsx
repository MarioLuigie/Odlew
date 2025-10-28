// modules
import Link from 'next/link'
// lib
import { MenuFooterContent } from '@/lib/constants'
import { capitalizeFirstLetter } from '@/lib/utils'

type MenuContentItem = {
	label: string
	path: string
}

function MenuContentItem({ item }: { item: MenuContentItem }) {
	return (
		<div className="w-full border-b-[1px]">
			<Link href={item.path} key={item.label} className="inline-block pr-3">
				<li className="pb-2 pt-4">
					<p className="text-menuTextLight text-[14px] font-medium transition-all ease-in-out hover:text-accentHover duration-500">
						{capitalizeFirstLetter(item.label)}
					</p>
				</li>
			</Link>
		</div>
	)
}

export default function MenuFooter() {
	return (
		<nav className="flex flex-col w-full ml-8 md:ml-16">
			<ul className="flex flex-col gap-2">
				{MenuFooterContent.map((item) => (
					<MenuContentItem item={item} key={item.label} />
				))}
			</ul>
		</nav>
	)
}
