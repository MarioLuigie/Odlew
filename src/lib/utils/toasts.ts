// components
import { toast } from '@/hooks/use-toast'
import { toStringArray } from '@/lib/utils'
import { LucideIcons } from '@/lib/types/enums'

export function toastError(
	data: string | string[] | { [key: string]: string },
	title: string = 'Błąd!'
) {
	toStringArray(data).forEach((description) => {
		toast({
			title,
			variant: 'error',
			description,
		})
	})
}

export function toastWarning(
	data: string | string[] | { [key: string]: string },
	title: string = 'Ostrzeżenie!'
) {
	toStringArray(data).forEach((description) => {
		toast({
			title,
			variant: 'warning',
			description,
		})
	})
}

export function toastSuccess(
	data: string | string[] | { [key: string]: string },
	title: string = 'Sukces!'
) {
	toStringArray(data).forEach((description) => {
		toast({
			title,
			variant: 'success',
			description,
			icon: LucideIcons.MoveDownRight
		})
	})
}