import { studentLogin, studentRegister } from '../controllers/studentController.js';
import express from 'express'

const router = express.Router();

/**
 * @swagger
 * /student/register:
 *   post:
 *     summary: Register a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               className: 
 *                 type: string
 *     responses:
 *       201:
 *         description: Student registered successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post('/register', studentRegister)

/**
 * @swagger
 * /student/login:
 *   post:
 *     summary: Login a student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Email or password missing
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.post('/login', studentLogin)

export default router;