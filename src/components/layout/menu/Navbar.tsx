'use client'
// modules
import Link from 'next/link'
// lib
import { MenuContent } from '@/lib/constants'
import { cn, capitalizeFirstLetter, capitalizeEntireText } from '@/lib/utils'

type MenuProps = {
	handleClose?: () => void
	position?: 'left' | 'right'
	capitalize?: 'entire' | 'first' | 'default'
	className?: string
}

export default function Navbar({
	handleClose,
	position = 'right',
	capitalize = 'default',
	className,
}: MenuProps) {
	const textPosition = {
		right: 'text-right',
		left: 'text-left',
	}

	return (
		<nav className='w-full'>
			<ul className={cn("flex flex-col gap-2 items-end", className)}>
				{MenuContent.map((item) => (
					<Link href={item.path} key={item.label}>
						<li
							{...(handleClose && { onClick: handleClose })}
							className="w-full"
						>
							<p
								className={cn(
									`text-textLight w-full text-[24px]`,
									textPosition[position],
								)}
							>
								{capitalize === 'entire'
									? capitalizeEntireText(item.label)
									: capitalize === 'first'
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
