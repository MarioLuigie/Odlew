'use client'
// modules
import Link from 'next/link'
// lib
import { MenuContent as menu } from '@/lib/constants'
import { cn, capitalizeFirstLetter, capitalizeEntireText } from '@/lib/utils'

type MenuProps = {
	handleClose?: () => void
	position?: 'left' | 'right'
	capitalize?: 'entire' | 'firstLetter' | 'default'
}

export default function Navbar({
	handleClose,
	position = 'right',
	capitalize = 'default',
}: MenuProps) {
	const textPosition = {
		right: 'text-right',
		left: 'text-left',
	}

	return (
		<nav>
			<ul className="flex flex-col gap-2 items-end">
				{menu.map((item) => (
					<Link href={item.path} key={item.label} className="w-full">
						<li
							{...(handleClose && { onClick: handleClose })}
							className="w-full"
						>
							<p
								className={cn(
									'text-menuTextLight text-[26px] w-full',
									textPosition[position]
								)}
							>
								{capitalize === 'entire'
									? capitalizeEntireText(item.label)
									: capitalize === 'firstLetter'
									? capitalizeFirstLetter(item.label)
									: item.label}
							</p>
						</li>
					</Link>
				))}
			</ul>
		</nav>
	)
}
