import bcrypt from 'bcrypt';
import { IStudent } from '../models/studentModel.js';
import { ITeacher } from '../models/teacherModel.js';

export const hashPassword = async (password:string) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const isPasswordCorrect = async (password:string, user:IStudent|ITeacher) => {
    return await bcrypt.compare(password, user.password);
}