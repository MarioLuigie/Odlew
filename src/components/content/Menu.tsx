'use client'
// modules
import Link from 'next/link'
// lib
import { MenuContent as menu } from '@/lib/constants'

type MenuProps = {
	handleClose?: () => void
}

export default function Menu({ handleClose }: MenuProps) {
	return (
		<nav>
			<ul className="flex flex-col gap-3 items-end">
				{menu.map((item) => (
					<Link href={item.path} key={item.label}>
						<li {...(handleClose && { onClick: handleClose })}>
							<p className="text-menuTextLight text-[26px] text-right">
								{item.label}
							</p>
						</li>
					</Link>
				))}
			</ul>
		</nav>
	)
}
