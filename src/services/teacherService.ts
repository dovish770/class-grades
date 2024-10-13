import { Request } from 'express';
import Teacher, { ITeacher } from '../models/teacherModel.js';
import {hashPassword} from './passwordService.js'

export const createNewTeacher = async (req: Request): Promise<ITeacher> => {
    const { fullName, email, password, class: className } = req.body;
    
    if (!fullName || !email || !password || !className) {
        throw new Error('fields missing! must contain: fullName, email, password, and class name');
    }

    const hashedPassword = await hashPassword(password)
    try {
        const newTeacher = new Teacher({
            fullName,
            email,
            hashedPassword,
            class: className
        });

        const savedTeacher = await newTeacher.save();
        return savedTeacher;

    } catch (error: any) {
        throw new Error(`Error creating new teacher: ${error.message}`);
    }
};
