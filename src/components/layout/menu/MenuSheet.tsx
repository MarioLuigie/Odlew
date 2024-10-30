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

// 'use client'
// // modules
// import { useState } from 'react'
// // lib
// import { Icons } from '@/lib/constants/icons'
// // components
// import CustomSheet from '@/components/shared/CustomSheet'
// import Navbar from '@/components/content/Navbar'
// import SVG from '@/components/shared/SVG'
// import Drop from '@/components/content/Drop'

// function MenuSheetTrigger() {
// 	return (
// 		<div>
// 			<SVG src={Icons.MENU_MOBILE.path} />
// 		</div>
// 	)
// }

// export default function MenuSheet() {
// 	const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)

// 	const handleCloseSheet = () => {
// 		setIsSheetOpen(false)
// 	}

// 	return (
// 		<CustomSheet
// 			side="top"
// 			className="min-h-screen max-h-screen flex flex-col gap-0"
// 			trigger={<MenuSheetTrigger />}
// 			isOpen={isSheetOpen}
// 			setIsOpen={setIsSheetOpen}
// 		>
// 			{/* TOP */}
// 			<div className="h-0.5 min-h-[360px] p-6 pt-sheetPadding grow flex flex-col justify-start bg-menuTopBg">
// 				<Navbar handleClose={handleCloseSheet} />
// 			</div>

// 			{/* BOTTOM */}
// 			<div className="h-0.5 p-6 grow flex flex-col bg-menuBottomBg">

// 				<div className="w-full h-full grow flex justify-end bg-yellow-300">
// 					<p className="pr-2 text-[18px] text-menuTextDark">
// 						P.S. Odlew Odlewnia Artystyczna
// 					</p>
// 					<div className="w-[2px] bg-menuTopBg"></div>
// 				</div>

// 				<div className="grow py-4 px-2 flex flex-col gap-4 justify-start  bg-red-300">
// 					<Drop />
// 					<div className='flex flex-col gap-1 text-[14px] text-menuTextDark'>
// 						<p>Adres: Jawornik 505, 32-400 Myślenice</p>
// 						<p>E-mail: polewka.szymon@gmail.com</p>
// 						<p>Tel: 665 981 994</p>
// 					</div>
// 				</div>

// 			</div>
// 		</CustomSheet>
// 	)
// }
