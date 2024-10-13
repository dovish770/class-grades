import { Request, Response } from 'express';
import Grade, { IGrade } from '../models/gardeModel.js';
import Student, { IStudent } from '../models/studentModel.js';
import {pushGradeToStudent} from '../services/studentService.js'

export const createGradeAndPush = (req: Request, student: IStudent): void => {
    const { subject, score, comment } = req.body;

    const newGrade = new Grade({
        subject,
        score,
        comment
    });
    pushGradeToStudent(student, newGrade);
};
