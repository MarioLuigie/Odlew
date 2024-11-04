'use server'

import { OpinionFormValues } from "@/lib/types/zod";

// CREATE
export async function createOpinion(opinionFormValues: OpinionFormValues) {
  console.log(opinionFormValues)
  try {

    return {
      success: true,
      data: {},
    }
  } catch (err) {
    console.error(err)
    
    return {
      success: false,
      data: {},
      error: ''
    }
  }
}