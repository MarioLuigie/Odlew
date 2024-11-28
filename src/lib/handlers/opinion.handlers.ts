// lib
import { createOpinion, deleteOpinion } from '@/lib/actions/opinion.actions'
import { OpinionFormValues } from '@/lib/types/zod'
import { IOpinion } from '@/lib/models/opinion.model'
import { toastSuccess, toastError } from '@/lib/utils/toasts'

// CREATE
export const handleCreateOpinion = async (
	opinionFormValues: OpinionFormValues
) => {
	const res: Result<IOpinion> = await createOpinion(opinionFormValues)

	if (res.success) {
		toastSuccess('Dziękujemy! Twoja opinia została pomyślnie dodana.', 'Dodawanie opini.')
	} else if (res.errors) {
		toastError(res.errors)
	}

	return res
}

// DELETE
export const handleDeleteOpinion = async (id: string) => {
	const res: Result<IOpinion>  = await deleteOpinion(id)

	if (res.success) {
		toastSuccess('Opinia została pomyślnie usunięta.', 'Usuwanie opini.')
	} else if (res.errors) {
		toastError(res.errors)
	}
	return res
}
