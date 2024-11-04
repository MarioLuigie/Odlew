// modules
import { Schema, model, models } from 'mongoose'

export interface IOpinion extends Document {
	_id: string
	name: string
	stars: number
	opinion: string
}

const OpinionSchema = new Schema({
	name: {
		type: String,
		default: '',
	},
	stars: {
		type: String,
		default: '',
	},
	opinion: {
		type: String,
		default: '',
	},
})

export const OpinionModel =
	models?.Opinion || model<IOpinion>('Opinion', OpinionSchema)
