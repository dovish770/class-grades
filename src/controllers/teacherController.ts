import { Request, Response } from 'express';
import {createNewTeacher} from '../services/teacherService.js'


export const teacherRegister = async (req: Request, res: Response) => {
    try {
      const newTeacher = await createNewTeacher(req);
      res.status(201).json(newTeacher);

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
  };

  