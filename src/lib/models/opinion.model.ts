// modules
import { Schema, model, models, ObjectId } from 'mongoose'

export interface IOpinion extends Document {
	_id: ObjectId
	name: string
	stars: number
	opinion: string
  accepted: boolean
	added: string
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
	added: {
		type: String,
		default: '01-01-2024'
	}
})

export const OpinionModel =
	models?.Opinion || model<IOpinion>('Opinion', OpinionSchema)
