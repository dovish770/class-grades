import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITeacher extends Document {
    _id: Types.ObjectId;
    fullName: string;
    email: string;
    password: string
    class: string
}

const UserSchema = new Schema<ITeacher>({
    fullName:{
      type: String,
      required: [true, "please enter your name"],
      maxlength: [50, 'name too long'],
      match: [/^[a-zA-Z]+$/, 'invalid name']
      },
    email:{
      type: String,
      required: [true, 'please enter email'],
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email is not valid']
    },
    password:{
        unique: true,
        required: [true, "please enter password"],
        minlength: [8, 'password must contain at least 8 characters'],
        maxlength: [20, 'password too long'],
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number, and be at least 8 characters long']
    },
    class: {
        type: ClassSchema,
        required: true,
        unique: true
    }
  });
  
  export default mongoose.model<ITeacher>("User", UserSchema);

  