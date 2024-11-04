'use client'
// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
// lib
import { FormFieldType } from '@/lib/types/enums'
import { OpinionFormSchema, OpinionFormValues } from '@/lib/types/zod'
// components
import { Form } from '@/components/ui/form'
import CustomFormField from '@/components/shared/CustomFormField'
import SubmitButton from '@/components/shared/SubmitButton'
import FieldsRequiredDesc from '../content/FieldsRequiredDesc'
import { handleCreateOpinion } from '@/lib/handlers/opinion.handlers'

export default function OpinionForm() {
	const form = useForm<OpinionFormValues>({
		resolver: zodResolver(OpinionFormSchema),
		defaultValues: {
			name: '',
			stars: 0,
			opinion: '',
		},
	})

	const { isSubmitting } = form.formState

	const onSubmit: SubmitHandler<OpinionFormValues> = async (
		opinionFormValues: OpinionFormValues
	) => {
		try {
			console.log(opinionFormValues)
			await handleCreateOpinion(opinionFormValues)
			form.reset()
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error(
					'Error from onSubmit for OpinionForm while sending opinion',
					err.message
				)
			} else {
				console.error('An unknown error occurred:', err)
			}
			throw new Error('An error occurred while sending message from form.')
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6"
			>
				{/* Name */}
				<CustomFormField
					control={form.control}
					typeField={FormFieldType.INPUT}
					name="name"
					label="Imię*"
					placeholder="Twoje imię"
					// iconSrc={Icons.USER_ICON.path}
					// iconAlt={Icons.USER_ICON.alt}
				/>
				{/* Message */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.TEXTAREA}
						name="opinion"
						label="Opinia*"
						placeholder="Treść opini"
						// iconSrc={Icons.EMAIL_ICON.path}
						// iconAlt={Icons.EMAIL_ICON.alt}
					/>
				</div>
				{/* STARS RATING */}
        <CustomFormField
					control={form.control}
					typeField={FormFieldType.STARS}
					name="stars"
					label="Ocena*"
					// iconSrc={Icons.USER_ICON.path}
					// iconAlt={Icons.USER_ICON.alt}
				/>
				<div>
					<SubmitButton isLoading={isSubmitting} className="w-full mt-2">
						Wyślij opinię
					</SubmitButton>
					<FieldsRequiredDesc className="mt-2" />
				</div>
			</form>
		</Form>
	)
}
