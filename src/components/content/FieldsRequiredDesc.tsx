import { cn } from '@/lib/utils'

export default function FieldsRequiredDesc({
	className,
}: {
	className?: string
}) {
	return (
		<div className={cn("flex justify-center items-center gap-1 text-zinc-500", className)}>
			<small className="text-[20px]">*</small>
			<small>Pola oznaczone gwiazdką są obowiązkowe</small>
		</div>
	)
}
