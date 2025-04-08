// modules
import Link from 'next/link'
// lib
import { MenuFooterContent } from '@/lib/constants'
import { capitalizeFirstLetter } from '@/lib/utils'
import Copyright from '@/components/content/Copyright'

type MenuContentItem = {
	label: string
	path: string
}

function MenuContentItem({ item }: { item: MenuContentItem }) {
	return (
		<div className="w-full border-b-[1px]">
			<Link href={item.path} key={item.label} className="inline-block pr-3">
				<li className="py-2">
					<p className="text-menuTextLight text-[18px]">
						{capitalizeFirstLetter(item.label)}
					</p>
				</li>
			</Link>
		</div>
	)
}

export default function MenuFooter() {
	return (
		<nav className="flex flex-col w-full ml-16">
			<ul className="flex flex-col gap-2">
				{MenuFooterContent.map((item) => (
					<MenuContentItem item={item} key={item.label} />
				))}
			</ul>
			<div className="flex flex-col items-start w-full xl:pt-8">
				<Copyright />
				<small className="text-teal-600">
					Created by &copy; ARWcode 2024
				</small>
			</div>
		</nav>
	)
}
