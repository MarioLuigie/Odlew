'use server'

import { OpinionFormValues } from "@/lib/types/zod";

// CREATE
export async function createOpinion(opinionFormValues: OpinionFormValues) {
  console.log(opinionFormValues)
}