
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { OpinionManipulationType } from '@/lib/types'

type CustomManipulationProps = {
	label?: string
	trigger?: React.ReactNode
	manipulations: OpinionManipulationType[]
}

export default function CustomManipulation({
	label,
	trigger='Open',
	manipulations,
}: CustomManipulationProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{trigger}
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className={cn('bg-background shodow-md w-[160px]')}
			>
				{label && (
					<>
						<DropdownMenuLabel>{label}</DropdownMenuLabel>
						<DropdownMenuSeparator />
					</>
				)}
				{manipulations.map((manipulation, i) => (
          <DropdownMenuItem key={i}>
            <div>{manipulation.label}</div>
          </DropdownMenuItem>
        ))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
