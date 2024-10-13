import { Request } from 'express';
import Student, { IStudent } from '../models/studentModel.js';
import { hashPassword } from './passwordService.js';
import { IsClassExist } from './classService.js';
import { IGrade } from '../models/gardeModel.js';

export const createNewStudent = async (req: Request): Promise<{ student: IStudent }> => {
    const { fullName, email, password, className } = req.body; 
    
    if (!fullName || !email || !password || !className) {
        throw new Error('fields missing! must contain: fullName, email and password');
    }
    const hashedPassword = await hashPassword(password);

    const classExists = await IsClassExist(className);
    if (!classExists) {
        throw new Error('Class does not exist');
    }

    try {
        const newStudent = new Student({
            fullName,
            email,
            password: hashedPassword,
            class: classExists
        });

        const savedStudent = await newStudent.save();

        return { student: savedStudent };

    } catch (error: any) {
        throw new Error(`Error creating new student: ${error.message}`);
    }
};

export const getStudentByEmail = async (email: string): Promise<IStudent | null> => {
    const student = await Student.findOne({ email });
    if (!student) {
        return null;
    }
    return student;
};


export const getStudentById = async (id: string): Promise<IStudent | null> => {
    const student = await Student.findById(id);
    if (!student) {
        return null;
    }
    return student;
};

export const pushGradeToStudent = (student:IStudent, grade:IGrade) => {
    if (!student.grades) {
        student.grades = [];
    }
  
    student.grades.push(grade);
}
        

