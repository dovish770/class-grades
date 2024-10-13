import { studentRegister } from '../controllers/studentController.js';
import express from 'express'

const router = express.Router();

router.post('/register', studentRegister);

export default router;