import mongoose, { Schema, Document, Types } from "mongoose";
import ClassSchema, { IClass } from '../models/classModel.js'
import { GradeSchema, IGrade } from '../models/gardeModel.js';

export interface IStudent extends Document {
    _id: Types.ObjectId;
    fullName: string;
    email: string;
    password: string
    class?: Types.ObjectId;
    grades?: IGrade[]
}

const StudentSchema = new Schema<IStudent>({
  fullName: {
    type: String,
    required: [true, "please enter your name"],
    maxlength: [50, 'name too long'],
    match: [/^[a-zA-Z\s]+$/, 'invalid name']
  },
  email: {
    type: String,
    required: [true, 'please enter email'],
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email is not valid']
  },
  password: {
    type: String,
    required: [true, "please enter password"]
  },
  class: {
    type: Types.ObjectId,
    ref: 'Class',
  },
  grades: [GradeSchema]
});
  
export default mongoose.model<IStudent>("Student", StudentSchema);

