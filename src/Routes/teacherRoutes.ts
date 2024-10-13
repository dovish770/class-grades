import { teacherRegister } from '../controllers/teacherController.js';
import express from 'express'

const router = express.Router();

router.post('/register', teacherRegister);

export default router;