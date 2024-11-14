// modules
import { Schema, model, models } from 'mongoose'

export interface IContact extends Document {
	_id: string
	name: string
  topic: string
	email: string
	message: string
	createdAt: Date
}

const ContactSchema = new Schema({
	name: {
		type: String,
		default: '',
	},
	topic: {
		type: String,
		default: '',
	},
  email: {
		type: String,
		default: '',
	},
  message: {
		type: String,
		default: '',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	}
})

export const ContactModel =
	models?.Contact || model<IContact>('Contact', ContactSchema)











