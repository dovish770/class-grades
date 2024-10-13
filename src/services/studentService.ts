import { Request } from 'express';
import Student, { IStudent } from '../models/studentModel.js';
import { hashPassword } from './passwordService.js';

export const createNewStudent = async (req: Request): Promise<{ message: string; student: IStudent }> => {
    const { fullName, email, password } = req.body; 
    
    if (!fullName || !email || !password) {
        throw new Error('fields missing! must contain: fullName, email and password');
    }
    const hashedPassword = await hashPassword(password);

    try {
        const newStudent = new Student({
            fullName,
            email,
            password: hashedPassword,
        });

        const savedStudent = await newStudent.save();
        return { student: savedStudent, message: 'Student created successfully! Please select a class.'};

    } catch (error: any) {
        throw new Error(`Error creating new student: ${error.message}`);
    }
};