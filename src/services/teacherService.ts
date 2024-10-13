import { Request } from 'express';
import Teacher, { ITeacher } from '../models/teacherModel.js';
import { hashPassword } from './passwordService.js';
import { createNewClass } from './classService.js';

export const createNewTeacher = async (req: Request): Promise<ITeacher> => {
    const { fullName, email, password, className } = req.body;
    
    if (!fullName || !email || !password || !className) {
        throw new Error('fields missing! must contain: fullName, email, password, and class name');
    }

    const hashedPassword = await hashPassword(password);
    const newClass = await createNewClass(className);
    try {
        const newTeacher = new Teacher({
            fullName,
            email,
            password: hashedPassword,
            class: newClass
        });

        const savedTeacher = await newTeacher.save();
        return savedTeacher;

    } catch (error: any) {
        throw new Error(`Error creating new teacher: ${error.message}`);
    }
};

export const getTeacher = async (email: string): Promise<ITeacher | null> => {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
        return null;
    }
    return teacher;
};
