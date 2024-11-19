import { createOpinion, deleteOpinion } from '@/lib/actions/opinion.actions'
import { OpinionFormValues } from '@/lib/types/zod'
import { IOpinion } from '@/lib/models/opinion.model'
import { toastSuccess, toastError } from '@/lib/utils/toasts'

// CREATE
export const handleCreateOpinion = async (
	opinionFormValues: OpinionFormValues
) => {
	const result: Result<IOpinion> = await createOpinion(opinionFormValues)

	if (result.success) {
		toastSuccess('Dziękujemy! Twoja opinia została pomyślnie dodana.', 'Dodawanie opini.')
	} else if (result.errors) {
		toastError(result.errors)
	}

	return result
}

// DELETE
export const handleDeleteOpinion = async (id: string) => {
	const result: Result<IOpinion>  = await deleteOpinion(id)

	if (result.success) {
		toastSuccess('Opinia została pomyślnie usunięta.', 'Usuwanie opini.')
	} else if (result.errors) {
		toastError(result.errors)
	}
	return result
}
