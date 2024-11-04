// modules
import { Schema, model, models } from 'mongoose'

export interface IOpinion extends Document {
	_id: string
	name: string
	stars: number
	opinion: string
  accepted: boolean
}

const OpinionSchema = new Schema({
	name: {
		type: String,
		default: '',
	},
	stars: {
		type: Number,
		default: 0,
	},
	opinion: {
		type: String,
		default: '',
	},
  accepted: {
		type: Boolean,
		default: false,
	},
})

export const OpinionModel =
	models?.Opinion || model<IOpinion>('Opinion', OpinionSchema)
