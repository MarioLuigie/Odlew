'use client'
import { MenuContent } from '@/lib/constants'
import { capitalizeEntireText, capitalizeFirstLetter, cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuHeaderProps = {
	capitalize?: 'entire' | 'first' | 'default'
	className?: string
}

export default function MenuHeader({ className, capitalize }: MenuHeaderProps) {
	const path = usePathname()

	return (
		<div className="hidden md:block">
			<nav className="w-full">
				<ul className={cn('flex justify-end items-center', className)}>
					{MenuContent.map((item) => (
						<Link href={item.path} key={item.label}>
							<li
								className={cn(
									'min-w-[120px] xl:max-w-[190px] xl:min-w-[180px] py-2 flex justify-center items-center border-b-[2px] border-accentActive hover:border-accentHover transition-colors duration-500',
									path === item.path ? 'border-[#383638]' : ''
								)}
							>
								<p className="text-textLight text-base">
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
		</div>
	)
}
