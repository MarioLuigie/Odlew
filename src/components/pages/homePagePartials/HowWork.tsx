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
				<button className="w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center">
					<p>Kontakt z klientem</p>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button className="w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center">
					<p>Tworzenie projektu</p>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button className="w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center">
					<p>Realizacja projektu</p>
				</button>
				<div className="w-[2px] h-[30px] bg-accent" />

				<button className="w-full py-2 px-4 rounded-l-full rounded-br-full border-2 border-accent text-center">
					<p>Odbiór realizacji</p>
				</button>
			</menu>
			<div className="w-full h-[400px] bg-red-400"></div>
		</div>
	)
}
