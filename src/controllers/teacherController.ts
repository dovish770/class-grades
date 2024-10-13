import { Request, Response } from 'express';
import {createNewTeacher, getTeacher } from '../services/teacherService.js'
import {isPasswordCorrect} from '../services/passwordService.js'
import {getStudentById} from '../services/studentService.js'
import {createGradeAndPush} from '../services/gradeService.js'


export const teacherRegister = async (req: Request, res: Response) => {
    try {
      const newTeacher = await createNewTeacher(req);
      res.status(201).json(newTeacher);

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
  };


export const teacherLogin = async (req: Request, res: Response) => {

  const {email, password} = req.body;

  if(!email || !password){
      res.status(400).json({message: "email and password are required."});
  }

  try{
      const teacher = await getTeacher(email)
      if(!teacher){
          res.status(404).json({message: "teacher not found."})
      }
      else{
          const isPasswordValid = await isPasswordCorrect(password, teacher)
          if(!isPasswordValid){
              res.status(400).json({message: 'Password is incorrect!'});
          }
          else{
              res.status(200).json({message: "Login successful"});
          }
      }

  } catch (error: any) {
      res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const addGradeToStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.body.student;

        const student = await getStudentById(studentId)

        if (!student) {
            throw new Error('student was not found!');
        } 
        
        const newGrade = createGradeAndPush(req, student)

        await student.save();

        res.status(200).json(student);
        
    } catch (error:any) {
      res.status(500).json({ message: 'Error adding grade', error: error.message });
    }
  };
  