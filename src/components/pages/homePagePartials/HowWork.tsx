'use client'
// modules
// import { useState } from 'react'
// components
import Title from '@/components/shared/Title'

export default function HowWork() {
	// const [activContentIndex, setActiveContentIndex] = useState<number>(0)

	return (
		<div id="tabs" className="min-h-customScreen mb-4">
			<Title className="mb-6 px-5">
				<p>Jak pracujemy?</p>
			</Title>
			<menu className="w-full px-5 pb-8 flex flex-col items-center text-textDark">
				<button className="relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center">
					<p>Kontakt z klientem</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						1
					</div>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button className="relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center">
					<p>Tworzenie projektu</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						2
					</div>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button className="relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center">
					<p>Realizacja projektu</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						3
					</div>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button className="relative w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center">
					<p>Odbiór realizacji</p>
					<div className="h-full aspect-square absolute flex justify-center items-center rounded-full top-0 left-0 bg-accent text-textLight">
						4
					</div>
				</button>
			</menu>
			<div className="w-full h-[400px] bg-mottoBg"></div>
		</div>
	)
}
