// modules
import { Mail, MapPinHouse, Phone } from 'lucide-react'
// lib
import { App } from '@/lib/constants/texts'
// components
import Drop from '@/components/shared/Drop'

export default function ContactInfo() {
	return (
		<div className="py-4 px-2 flex flex-col gap-5 justify-start">
			<Drop />
			<div className="flex flex-col gap-3 text-[14px] text-textDark">
				<div className="flex gap-2">
					<MapPinHouse size={20} className="text-accent" />
					<p>{App.ADDRESS}</p>
				</div>
				<div className="flex gap-2">
					<Mail size={20} className="text-accent" />
					<p>{App.EMAIL}</p>
				</div>
				<div className="flex gap-2">
					<Phone size={20} className="text-accent" />
					<p>{App.PHONE}</p>
				</div>
			</div>
		</div>
	)
}
