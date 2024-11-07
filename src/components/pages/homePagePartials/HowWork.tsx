'use client'
// modules
import { useState } from 'react'
// lib
import { cn } from '@/lib/utils'
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
				'relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center transition-all ease-in-out shadow-lg',
				activeTabIndex === index ? 'bg-accent text-textLight' : ''
			)}
		>
			<p>{label}</p>
			<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
				{index + 1}
			</div>
		</button>
	)
}

export default function HowWork() {
	const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

	const handleTabClick = (index: number) => () => {
		setActiveTabIndex(index)
	}

	return (
		<div id="tabs" className="mb-4">
			<Title className="mb-6 px-5">
				<p>Jak pracujemy?</p>
			</Title>
			<menu className="w-full px-5 pt-4 flex flex-col items-center text-textDark">
				{HowWorkContent.map((tab, index) => (
					<div key={index} className="w-full flex flex-col items-center">
						<Tab
							onClick={handleTabClick(index)}
							activeTabIndex={activeTabIndex}
							label={tab.tabLabel}
							index={index}
						/>
						<div className="w-[2px] h-[30px] bg-accent" />
					</div>
				))}
			</menu>
			<div className="px-5">
				<div
					id="tab-content"
					className="w-full min-h-[240px] px-5 py-8 transition-all ease-in-out border-2 border-accent rounded-2xl shadow-lg"
				>
					<p className="text-justify">
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
