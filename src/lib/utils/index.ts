import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase()
}

export function capitalizeEntireText(str: string) {
  return str.toUpperCase()
}

export function deepClone(data: object): object {
  return JSON.parse(JSON.stringify(data))
}
