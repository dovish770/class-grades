import { Request, Response } from 'express';
import {createNewStudent} from '../services/studentService.js'


export const studentRegister = async (req: Request, res: Response) => {
    try {
      const newStudent = await createNewStudent(req);
      res.status(201).json(newStudent);

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
  };