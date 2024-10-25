'use client'
// modules
import { useState } from 'react'
// lib
import { Icons } from '@/lib/constants/icons'
// components
import CustomSheet from '@/components/shared/CustomSheet'
import Menu from '@/components/content/Menu'
import SVG from '@/components/shared/SVG'
import Drop from '@/components/content/Drop'

function MenuSheetTrigger() {
	return (
		<div>
			<SVG src={Icons.MENU_MOBILE.path} />
		</div>
	)
}

export default function MenuSheet() {
	const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)

	const handleCloseSheet = () => {
		setIsSheetOpen(false)
	}

	return (
		<CustomSheet
			side="top"
			className="min-h-screen max-h-screen flex flex-col gap-0"
			trigger={<MenuSheetTrigger />}
			isOpen={isSheetOpen}
			setIsOpen={setIsSheetOpen}
		>
			{/* TOP */}
			<div className="h-[50%] p-8 grow flex flex-col justify-end bg-menuTopBg">
				<Menu handleClose={handleCloseSheet} />
			</div>

			{/* BOTTOM */}
			<div className="h-[50%] p-8 grow flex-flex-col bg-menuBottomBg">
				<div className="h-[200px] w-full flex justify-end bg-yellow-300">
					<p className="pr-4 pt-6 text-menuTextDark text-[20px]">
						P.S. Odlew Odlewnia Artystyczna
					</p>
					<div className="w-[2px] h-full bg-menuTopBg"></div>
				</div>
				<div className="h-full py-10 px-6 flex flex-col gap-2 justify-start text-[16px] text-menuTextDark bg-red-300">
					<Drop />
					<p>Adres: Jawornik 505, 32-400 Myślenice</p>
					<p>E-mail: polewka.szymon@gmail.com</p>
					<p>Tel: 665 981 994</p>
				</div>
			</div>
		</CustomSheet>
	)
}
