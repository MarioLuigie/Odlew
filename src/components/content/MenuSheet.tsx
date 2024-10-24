// modules
import Link from 'next/link'
// lib
import { MenuContent as menu } from '@/lib/constants'
import SVG from '@/components/shared/SVG'
import { Icons } from '@/lib/constants/icons'
import CustomSheet from '@/components/shared/CustomSheet'

function MenuSheetTrigger() {
	return (
		<div>
			<SVG src={Icons.MENU_MOBILE.path} />
		</div>
	)
}

export default function MenuSheet() {
	return (
		<CustomSheet
			side="top"
			className="h-screen"
			trigger={<MenuSheetTrigger />}
		>
			<div className='flex flex-col justify-end bg-menuTopBg p-8 h-[50%]'>
				<ul className='flex flex-col gap-3'>
					{menu.map((item) => (
						<Link href={item.path} key={item.label}>
							<li>
								<p className='text-menuTextLight text-[28px] text-right'>{item.label}</p>
							</li>
						</Link>
					))}
				</ul>
			</div>
      <div className='bg-menuBottomBg h-full p-8'>
					<div className='w-full flex justify-end bg-red-300 h-[50%]'>
						<p className='text-menuTextDark text-[20px] pr-4 pt-6'>P.S. Odlew Odlewnia Artystyczna</p>
						<div className='bg-menuTopBg w-[2px] h-full'>

						</div>
					</div>
      </div>
		</CustomSheet>
	)
}
