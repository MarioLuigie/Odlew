// components
import { toast } from '@/hooks/use-toast'
import { toStringArray } from '@/lib/utils'

export function toastError(
	data: string | string[] | { [key: string]: string }
) {
	toStringArray(data).forEach((msg) => {
		toast({
			title: 'Błąd!',
			variant: 'error',
			description: msg,
		})
	})
}

export function toastWarning(
	data: string | string[] | { [key: string]: string }
) {
	toStringArray(data).forEach((msg) => {
		toast({
			title: 'Ostrzeżenie!',
			variant: 'warning',
			description: msg,
		})
	})
}

export function toastSuccess(
	data: string | string[] | { [key: string]: string }
) {
	toStringArray(data).forEach((msg) => {
    console.log(msg)
		toast({
			title: 'Sukces!',
			variant: 'success',
			description: msg,
		})
	})
}