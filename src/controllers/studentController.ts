import { Request, Response } from 'express';
import {createNewStudent, getStudent} from '../services/studentService.js'
import {isPasswordCorrect} from '../services/passwordService.js'

export const studentRegister = async (req: Request, res: Response) => {
    try {
      const newStudent = await createNewStudent(req);
      res.status(201).json(newStudent);

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
  };

  export const studentLogin = async (req: Request, res: Response) => {

    const {email, password} = req.body;
  
    if(!email || !password){
        res.status(400).json({message: "email and password are required."});
    }
  
    try{
        const student = await getStudent(email)
        if(!student){
            res.status(404).json({message: "student not found."})
        }
        else{
            const isPasswordValid = await isPasswordCorrect(password, student)
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