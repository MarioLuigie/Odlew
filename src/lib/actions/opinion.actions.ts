'use server'
// lib
import { OpinionFormValues } from '@/lib/types/zod'
import { IOpinion, OpinionModel } from '@/lib/models/opinion.model'
import { connectToDB } from '@/lib/utils/db'
import { deepClone } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

// GET
export async function getOpinions(): Promise<Result<IOpinion[]>> {
	try {
		await connectToDB()

		const opinions = await OpinionModel.find().lean()

		revalidatePath('/')

		console.log('Opinions:', opinions)
		return {
			success: true,
			data: deepClone(opinions),
		}
	} catch (err) {
		console.error(err)
		return {
			success: false,
			data: [],
			errors: { error: 'Problem z pobraniem zasobu.' },
		}
	}
}

// CREATE
export async function createOpinion(
	opinionFormValues: OpinionFormValues
): Promise<Result<IOpinion>> {
	console.log(opinionFormValues)

	try {
		await connectToDB()

		const createdOpinion: IOpinion = await OpinionModel.create({
			name: opinionFormValues.name,
			stars: opinionFormValues.stars,
			opinion: opinionFormValues.opinion,
			accepted: true, // ! Important change to false in the future
		})

		console.log('*** Created Opinion', createdOpinion)

		revalidatePath('/')

		return {
			success: true,
			data: deepClone(createdOpinion),
		}
	} catch (err) {
		console.error(err)

		return {
			success: false,
			errors: {
				error: 'Coś poszło nie tak podczas dodawania opini. Spróbuj później.',
			},
		}
	}
}

// DELETE
export async function deleteOpinion() {
	try {
	} catch (err) {
		console.error(err)
	}
}
