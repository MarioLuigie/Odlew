// modules
import { Schema, model, models, ObjectId } from 'mongoose'

export interface IOpinion extends Document {
	_id: ObjectId
	name: string
	stars: number
	opinion: string
  accepted: boolean
	createdAt: string
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
		type: String,
		// default: new Date(),
	}
})

export const OpinionModel =
	models?.Opinion || model<IOpinion>('Opinion', OpinionSchema)





