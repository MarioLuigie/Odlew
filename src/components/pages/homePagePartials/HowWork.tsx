'use client'
// modules
import { useState } from 'react'
// lib
import { capitalizeEntireText, cn } from '@/lib/utils'
import { HowWorkContent } from '@/lib/constants/texts'
// components
import Title from '@/components/shared/Title'

interface TabProps {
	onClick: () => void
	activeTabIndex: number
	label: string
	index: number
}

function Tab({ onClick, activeTabIndex, label, index }: TabProps) {
	return (
		<button
			onClick={onClick}
			className={cn(
				'relative w-full py-2 dp:py-4 rounded-l-full rounded-br-full text-right dp:text-3xl transition-all ease-in-out',
				activeTabIndex === index ? 'text-accent font-semibold' : ''
			)}
		>
			<p>{capitalizeEntireText(label)}</p>
		</button>
	)
}

export default function HowWork() {
	const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

	const handleTabClick = (index: number) => () => {
		setActiveTabIndex(index)
	}

	return (
		<div className="mb-4 dp:mb-0 dp:flex dp:border-b-[1px] dp:border-zinc-400 dp:min-h-customScreen">
			<div className="dp:w-1/2 textPageContainer dp:justify-end">
				<div>
					<Title className="titlePage">
						<p>Jak pracujemy?</p>
					</Title>
					<menu className="w-full px-5 py-4 flex flex-col items-center text-textDark">
						{HowWorkContent.map((tab, index) => (
							<div
								key={index}
								className="w-full flex flex-col items-center"
							>
								<Tab
									onClick={handleTabClick(index)}
									activeTabIndex={activeTabIndex}
									label={tab.tabLabel}
									index={index}
								/>
							</div>
						))}
					</menu>
				</div>
			</div>
			<div className="dp:w-1/2 bg-red-300">
				<div
					id="tab-content"
					className="w-full flex justify-center items-center min-h-[240px] dp:h-full px-5 py-8 transition-all ease-in-out bg-menuTopBg dp:p-20"
				>
					<p className="text-justify text-textLight dp:text-xl dp:leading-9">
						{HowWorkContent[activeTabIndex].tabContent}
					</p>
				</div>
			</div>
		</div>
	)
}

{
	/* <button
					onClick={() => setActiveContentIndex(0)}
					className={cn(
						'relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center transition-all ease-in-out',
						activContentIndex === 0 ? 'bg-accent text-textLight' : ''
					)}
				>
					<p>Kontakt z klientem</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						1
					</div>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button
					onClick={() => setActiveContentIndex(1)}
					className={cn(
						'relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center transition-all ease-in-out',
						activContentIndex === 1 ? 'bg-accent text-textLight' : ''
					)}
				>
					<p>Tworzenie projektu</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						2
					</div>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button
					onClick={() => setActiveContentIndex(2)}
					className={cn(
						'relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center transition-all ease-in-out',
						activContentIndex === 2 ? 'bg-accent text-textLight' : ''
					)}
				>
					<p>Realizacja projektu</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						3
					</div>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button
					onClick={() => setActiveContentIndex(3)}
					className={cn(
						'relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center transition-all ease-in-out',
						activContentIndex === 3 ? 'bg-accent text-textLight' : ''
					)}
				>
					<p>Odbiór realizacji</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						4
					</div>
				</button> */
}
