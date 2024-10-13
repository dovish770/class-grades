import { teacherLogin, teacherRegister, addGradeToStudent } from '../controllers/teacherController.js';
import express from 'express'

const router = express.Router();

router.post('/register', teacherRegister).post('/login', teacherLogin);
router.put('/grade', addGradeToStudent)

export default router;