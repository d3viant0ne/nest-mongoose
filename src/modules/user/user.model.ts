import { Document, Model, Schema, model } from 'mongoose'

export interface IUser extends Document {
    name: string;
    lastName: string;
    email: number;
    password: string;
    phone?: string;
}

interface IUserModel extends Model<IUser> { }

const userSchema = new Schema({
    name: { type: String, required: 'Field {PATH} is required' },
    lastName: { type: String, required: 'Field {PATH} is required' },
    email: { type: String, required: 'Field {PATH} is required' },
    password: { type: String, required: 'Field {PATH} is required' },
    phone: { type: String }
}) 

export const User = model<IUser>('user', userSchema) as IUserModel