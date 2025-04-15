'use server'
// modules
import mongoose from 'mongoose'
import { revalidatePath } from 'next/cache'
// lib
import { OpinionFormValues } from '@/lib/types/zod'
import { IOpinion, OpinionModel } from '@/lib/models/opinion.model'
import { connectToDB } from '@/lib/utils/db'
import { deepClone } from '@/lib/utils'
import { Routes } from '@/lib/constants/paths'

// GET
export async function getOpinions(): Promise<Result<IOpinion[]>> {
	try {
		await connectToDB()

		const opinions = await OpinionModel.find().sort({ _id: -1 }).lean()
		
		revalidatePath(Routes.ABOUT)

		console.log('FETCHED OPINIONS:', opinions)

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

		console.log('CREATED OPINION', createdOpinion)

		revalidatePath(Routes.HOME)

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
export async function deleteOpinion(id: string) {
	try {
		if (!id) {
			return {
				success: false,
				errors: { error: 'Invalid ID' },
			}
		}

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return {
				success: false,
				errors: { error: 'Invalid ObjectId format' },
			}
		}

		connectToDB()

		const deletedOpinion = await OpinionModel.findByIdAndDelete(id)

		if (!deletedOpinion) {
			return {
				success: false,
				errors: { error: 'Post to delete not found' },
			}
		}

		console.log('DELETED OPINION:', deletedOpinion)

		revalidatePath(Routes.HOME)

		return {
			success: true,
			data: deepClone(deletedOpinion)
		}
	} catch (err) {
		console.error(err)

		return {
			success: false,
			errors: { error: 'Something went wrong while deletion'}
		}
	}
}
