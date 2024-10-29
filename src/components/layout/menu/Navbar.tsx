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
	textSize?: 'sm' | 'md' | 'lg' | 'xl' | 'xl' | '2xl'
	className?: string
	border?: boolean
}

export default function Navbar({
	handleClose,
	position = 'right',
	capitalize = 'default',
	textSize = '2xl',
	className,
}: MenuProps) {
	const textPosition = {
		right: 'text-right',
		left: 'text-left',
	}

	const textSizeVariants = {
		['sm']: 'text-[12px]',
		['md']: 'text-[14px]',
		['lg']: 'text-[16px]',
		['xl']: 'text-[24px]',
		['2xl']: 'text-[26px]',
	}

	return (
		<nav className='w-full'>
			<ul className={cn("flex flex-col gap-2 items-end", className)}>
				{menu.map((item) => (
					<Link href={item.path} key={item.label} className="w-full">
						<li
							{...(handleClose && { onClick: handleClose })}
							className="w-full"
						>
							<p
								className={cn(
									`text-menuTextLight w-full`,
									textPosition[position],
									textSizeVariants[textSize]
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
