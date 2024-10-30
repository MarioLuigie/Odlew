'use client'
// modules
import { useState } from 'react'
// lib
import { Icons } from '@/lib/constants/icons'
// components
import CustomSheet from '@/components/shared/CustomSheet'
import Navbar from '@/components/layout/menu/Navbar'
import SVG from '@/components/shared/SVG'
import CompanyName from '@/components/content/CompanyName'
import Contact from '@/components/content/Contact'

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
			className="h-screen flex flex-col gap-0"
			trigger={<MenuSheetTrigger />}
			isOpen={isSheetOpen}
			setIsOpen={setIsSheetOpen}
		>
			<div className="h-[100px] bg-menuTopBg"></div>
			<div className="h-full flex flex-col overflow-y-scroll hide-scrollbar">
				{/* TOP */}
				<div className="h-1/2 min-h-[300px] p-6 flex flex-col justify-start bg-menuTopBg">
					<Navbar handleClose={handleCloseSheet} capitalize='entire'/>
				</div>
				{/* BOTTOM */}
				<div className="min-h-1/2 grow p-6 pb-16 flex flex-col bg-menuBottomBg">
					<CompanyName mode="dark" />
					<Contact />
				</div>
			</div>
		</CustomSheet>
	)
}
