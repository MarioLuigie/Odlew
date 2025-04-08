'use client'
// modules
import { useState } from 'react'
// lib
import { capitalizeEntireText, cn } from '@/lib/utils'
import { HowWorkContent } from '@/lib/constants/texts'
// components
import CustomButton from '@/components/shared/CustomButton'
import Drop from '@/components/shared/Drop'
import { MoveDownRight, MoveDownLeft } from 'lucide-react'
import TextVertical from '@/components/shared/TextVertical'

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
				'relative w-full py-2 md:py-0 rounded-l-full rounded-br-full text-right md:text-[36px] transition-all ease-in-out',
				activeTabIndex === index
					? 'text-[#AA5002] -translate-x-12 underline transition-all duration-500'
					: ''
			)}
		>
			<p>{capitalizeEntireText(label)}</p>
		</button>
	)
}

// export default function HowWork() {
// 	const [activeTabIndex, setActiveTabIndex] = useState<number>()

// 	const handleTabClick = (index: number) => () => {
// 		setActiveTabIndex(index)
// 	}

// 	return (
// 		<div className="mb-4 md:mb-0 md:flex md:border-b-[1px] md:border-zinc-400 md:min-h-customScreen">
// 			<div className="md:w-1/2 bg-red-300">
// 				<div
// 					id="tab-content"
// 					className="w-full flex justify-center items-center min-h-[240px] md:h-full px-5 py-8 transition-all ease-in-out bg-menuTopBg md:p-20"
// 				>
// 					<p className="text-justify text-textLight md:text-xl md:leading-9">
// 						{HowWorkContent[activeTabIndex].tabContent}
// 					</p>
// 				</div>
// 			</div>
// 			<div className="md:w-1/2 textPageContainer md:justify-end">
// 				<div>
// 					<Title className="titlePage">
// 						<p>Jak pracujemy?</p>
// 					</Title>
// 					<menu className="w-full px-5 py-4 flex flex-col items-center text-textDark">
// 						{HowWorkContent.map((tab, index) => (
// 							<div
// 								key={index}
// 								className="w-full flex flex-col items-center"
// 							>
// 								<Tab
// 									onClick={handleTabClick(index)}
// 									activeTabIndex={activeTabIndex}
// 									label={tab.tabLabel}
// 									index={index}
// 								/>
// 							</div>
// 						))}
// 					</menu>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

export default function HowWork() {
	const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null)

	const handleTabClick = (index: number) => () => {
		setActiveTabIndex(index)
	}

	return (
		<div className="h-customScreen md:max-h-[820px] relative mb-4 md:mb-0 md:flex md:border-b-[1px] md:border-zinc-400">
			<div className="absolute right-1/2 top-1/2 translate-x-[25px] -translate-y-40">
				<Drop
					className="w-[50px] h-[50px] transition-all duration-300"
					color="#E36A00"
					corner={activeTabIndex !== null ? 'bottom-left' : 'bottom-right'}
				>
					{activeTabIndex !== null ? (
						<MoveDownLeft size={35} color="#463E46" />
					) : (
						<MoveDownRight size={35} color="#463E46" />
					)}
				</Drop>
			</div>
			{/* Texts */}
			<div className="md:w-1/2 bg-red-300">
				<div
					id="tab-content"
					className="p-32 w-full flex justify-center items-center min-h-[240px] md:h-full py-8 transition-all ease-in-out bg-menuTopBg"
				>
					<div>
						{activeTabIndex !== null ? (
							<div>
								<div className="min-h-[240px] pb-4">
									<p className="text-textLight font-medium md:text-lg">
										{HowWorkContent[activeTabIndex].tabContent}
									</p>
								</div>
								<CustomButton navlink path="/oferta">
									Przejdź do oferty
								</CustomButton>
							</div>
						) : null}
					</div>
				</div>
			</div>

			{/* Tabs */}
			<div className="md:w-1/2 textPageContainer md:justify-end bg-[#DAD7D1]">
				<div>
					{/* <Title className="titlePage">
						<p>Jak pracujemy?</p>
					</Title> */}

					<TextVertical>Jak pracujemy</TextVertical>
					<menu className="w-full px-5 py-4 flex flex-col items-center text-textDark">
						{HowWorkContent.map((tab, index) => (
							<div
								key={index}
								className="w-full flex flex-col items-center"
							>
								<Tab
									onClick={handleTabClick(index)}
									activeTabIndex={activeTabIndex ?? -1} // Domyślnie nieaktywne
									label={tab.tabLabel}
									index={index}
								/>
							</div>
						))}
					</menu>
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
