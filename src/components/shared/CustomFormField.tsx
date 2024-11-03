'use client'
// modules
import { useState } from 'react'
import { E164Number } from 'libphonenumber-js/core'
import { Control, FieldValues } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ReactDatePicker from 'react-datepicker'
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
// lib
import { FormFieldType } from '@/lib/types/enums'
// components
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import SVG from '@/components/shared/SVG'
import { Eye, EyeOff, Calendar } from 'lucide-react'

interface CustomFormFieldProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control: Control<any>
	typeField: FormFieldType
	name: string
	label?: string
	placeholder?: string
	type?: string
	autoFocus?: boolean
	description?: string
	disabled?: boolean
	iconSrc?: string
	iconAlt?: string
	dateFormat?: string
	showTimeSelect?: boolean
	children?: React.ReactNode
	renderSkeleton?: (field: FieldValues) => React.ReactNode
}

const RenderField = ({
	field,
	props,
}: {
	field: FieldValues
	props: CustomFormFieldProps
}) => {
	const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)
	switch (props.typeField) {
		case FormFieldType.INPUT:
			return (
				<div className="flex bg-transparent">
					{props.iconSrc && (
						<div className="text-textAccent flex-center ml-2">
							<SVG src={props.iconSrc} className='w-[24px] h-[24px]' />
						</div>
					)}
					<FormControl>
						<Input
							{...field}
							placeholder={props.placeholder}
							className="shad-input"
							disabled={props.disabled}
							type={isPasswordHidden ? props.type : 'text'}
							autoFocus={props.autoFocus}
						/>
					</FormControl>
					{props.name === 'password' && (
						<div
							className="flex-center pr-3 cursor-pointer"
							onClick={() => setIsPasswordHidden(!isPasswordHidden)}
						>
							{isPasswordHidden ? (
								<Eye size={24} className="text-textAccent" />
							) : (
								<EyeOff size={24} className="text-textAccent" />
							)}
						</div>
					)}
				</div>
			)

		case FormFieldType.TEXTAREA:
			return (
				<FormControl>
					<Textarea
						{...field}
						placeholder={props.placeholder}
						className="shad-textArea"
						disabled={props.disabled}
					/>
				</FormControl>
			)

		case FormFieldType.PHONE_INPUT:
			return (
				<FormControl>
					<PhoneInput
						defaultCountry="PL"
						placeholder={props.placeholder}
						international
						withCountryCallingCode
						value={field.value as E164Number | undefined}
						onChange={field.onChange}
						className="input-phone"
					/>
				</FormControl>
			)

		case FormFieldType.DATE_PICKER:
			return (
				<div className="flex rounded-md border border-dark-500 bg-input">
					<div className="text-textAccent flex-center ml-2">
            <Calendar />
					</div>
					<FormControl>
						<ReactDatePicker
							showTimeSelect={props.showTimeSelect ?? false}
							selected={field.value}
							onChange={(date: Date | null) => field.onChange(date)}
							timeInputLabel="Time:"
							dateFormat={props.dateFormat ?? 'MM/dd/yyyy'}
							wrapperClassName="date-picker"
							placeholderText={props.placeholder}
						/>
					</FormControl>
				</div>
			)

		case FormFieldType.SKELETON:
			return props.renderSkeleton && props.renderSkeleton(field)

		case FormFieldType.SELECT:
			return (
				<FormControl>
					<Select onValueChange={field.onChange} value={field.value}>
						<SelectTrigger className="shad-select-trigger">
							<SelectValue placeholder={props.placeholder} />
						</SelectTrigger>
						<SelectContent className="shad-select-content">
							{props.children}
						</SelectContent>
					</Select>
				</FormControl>
			)

		case FormFieldType.CHECKBOX:
			return (
				<FormControl>
					<div className="flex items-center gap-3">
						<Checkbox
							checked={field.value}
							onCheckedChange={field.onChange}
							disabled={props.disabled}
							id={props.name}
						/>
						<Label
							htmlFor={props.name}
							className="text-xs font-thin text-textPrimary leading-5 cursor-pointer"
						>
							{props.label}
						</Label>
					</div>
				</FormControl>
			)
	}
}

export default function CustomFormField(props: CustomFormFieldProps) {
	const {
		control,
		typeField,
		name,
		label,
		description,
	} = props

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex flex-col flex-1">
					{typeField !== FormFieldType.CHECKBOX && label && (
						<FormLabel className="mb-[2px] text-textDark">{label}</FormLabel>
					)}
					<RenderField field={field} props={props} />
					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
