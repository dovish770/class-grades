import mongoose, { Schema, Document, Types } from "mongoose";
import { IStudent } from '../models/studentModel'

export interface IClass extends Document {
    _id: Types.ObjectId;
    name: string;
    students?: IStudent[]
}

const ClassSchema: Schema<IClass> = new Schema<IClass>({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: [20, 'class name too must contain not more then 20 characters'],
        trim: true
    },
    students: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        default: []
    }
});

export default ClassSchema;