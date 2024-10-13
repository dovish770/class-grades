import mongoose, { Schema, Document, Types } from "mongoose";
import ClassSchema, { IClass } from '../models/classModel.js';

export interface ITeacher extends Document {
    _id: Types.ObjectId;
    fullName: string;
    email: string;
    password: string;
    class: IClass;
}

const TeacherSchema = new Schema<ITeacher>({
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
      required: true
  }
});

export default mongoose.model<ITeacher>("Teacher", TeacherSchema);


