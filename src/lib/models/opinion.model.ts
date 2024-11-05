// modules
import { Schema, model, models, ObjectId } from 'mongoose'

export interface IOpinion extends Document {
	_id: ObjectId
	name: string
	stars: number
	opinion: string
  accepted: boolean
	createdAt: Date
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
	createdAt: {
		type: Date,
		default: Date.now,
	}
})

export const OpinionModel =
	models?.Opinion || model<IOpinion>('Opinion', OpinionSchema)











