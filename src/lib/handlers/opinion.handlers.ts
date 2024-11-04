import { createOpinion } from '@/lib/actions/opinion.actions'
import { OpinionFormValues } from '@/lib/types/zod'
import { IOpinion } from '@/lib/models/opinion.model'

// CREATE
export const handleCreateOpinion = async (
	opinionFormValues: OpinionFormValues
) => {
	const result: Result<IOpinion> = await createOpinion(opinionFormValues)

	return result
}
