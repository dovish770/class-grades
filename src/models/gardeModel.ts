import mongoose, { Schema, Document, Types } from "mongoose";

export interface IGrade extends Document {
    _id: Types.ObjectId;
    subject: string;
    score: Number;
    comment: string;
}

const GradeSchema = new Schema<IGrade>({
    subject: {
        type: String,
        required: [true, "subject is required"],
        maxlength: [50, 'subject too long'],
        match: [/^[a-zA-Z\s]+$/, 'invalid subject']
    },
    score: {
        type: Number,
        min: [0, 'Score must be at least 0'],
        max: [100, 'Score must be at most 100'],
        required: [true, 'please enter score']
    },
    comment: {
        type: String,
        required: [true, "please enter comment"],
        maxlength: [100, "comment cant be bigger than 100 characters"]
    }
});

export default mongoose.model<IGrade>("Grade", GradeSchema);
export { GradeSchema };
