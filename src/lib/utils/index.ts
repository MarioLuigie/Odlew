import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase()
}

export function capitalizeEntireText(str: string) {
	return str.toUpperCase()
}

export function deepClone(data: object) {
	return JSON.parse(JSON.stringify(data))
}

export function formatDate(
	date: Date | string,
	format: 'date' | 'time' | 'datetime' = 'datetime'
): string {
	const isoString = (
		typeof date === 'string' ? new Date(date) : date
	).toISOString()

	// Podstawowe części ISO: "RRRR-MM-DDTHH:MM:SS.sssZ"
	const [fullDate, fullTime] = isoString.split('T')
	const time = fullTime.slice(0, 8) // Wycinamy tylko "HH:MM:SS"

	switch (format) {
		case 'date':
			return fullDate // Zwraca "RRRR-MM-DD"
		case 'time':
			return time // Zwraca "HH:MM:SS"
		case 'datetime':
			return `${fullDate} ${time}` // Zwraca "RRRR-MM-DD HH:MM:SS"
		default:
			throw new Error(`Unknown format: ${format}`)
	}
}

// export function formatDate(
// 	date: Date | string,
// 	format: 'date' | 'time' | 'datetime' = 'datetime'
// ): string {
// 	const d = typeof date === 'string' ? new Date(date) : date

// 	// Formatujemy elementy daty
// 	const year = d.getFullYear()
// 	const month = String(d.getMonth() + 1).padStart(2, '0') // Miesiące są indeksowane od 0
// 	const day = String(d.getDate()).padStart(2, '0')
// 	const hours = String(d.getHours()).padStart(2, '0')
// 	const minutes = String(d.getMinutes()).padStart(2, '0')
// 	const seconds = String(d.getSeconds()).padStart(2, '0')

// 	switch (format) {
// 		case 'date':
// 			return `${year}-${month}-${day}`
// 		case 'time':
// 			return `${hours}:${minutes}:${seconds}`
// 		case 'datetime':
// 			return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
// 		default:
// 			throw new Error(`Unknown format: ${format}`)
// 	}
// }
