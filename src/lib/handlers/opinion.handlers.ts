import { createOpinion } from "@/lib/actions/opinion.actions"
import { OpinionFormValues } from "@/lib/types/zod"

// CREATE
export const handleCreateOpinion = async (opinionFormValues: OpinionFormValues) => {
  await createOpinion(opinionFormValues)
}