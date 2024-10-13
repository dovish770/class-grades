import { teacherLogin, teacherRegister } from '../controllers/teacherController.js';
import express from 'express'

const router = express.Router();

router.post('/register', teacherRegister).post('/login', teacherLogin);

export default router;