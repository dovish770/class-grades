import { teacherLogin, teacherRegister, addGradeToStudent, getAllGrades } from '../controllers/teacherController.js';
import express from 'express';
import { swaggerUi, swaggerDocs } from '../swagger.js'; // Import Swagger

const router = express.Router();

// Swagger Route
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /teacher/register:
 *   post:
 *     summary: Register a new teacher
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
 *         description: Teacher created
 *       400:
 *         description: Bad request (fields missing)
 *       500:
 *         description: Server error
 */
router.post('/register', teacherRegister);

/**
 * @swagger
 * /teacher/login:
 *   post:
 *     summary: Login a teacher
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
 *         description: Bad request
 *       404:
 *         description: Teacher not found
 *       500:
 *         description: Server error
 */
router.post('/login', teacherLogin);

/**
 * @swagger
 * /teacher/grade:
 *   put:
 *     summary: Add a grade to a student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *               grade:
 *                 type: object
 *                 properties:
 *                   subject:
 *                     type: string
 *                   score:
 *                     type: number
 *                   comment:
 *                     type: string
 *     responses:
 *       200:
 *         description: Grade added successfully
 *       500:
 *         description: Error adding grade
 */
router.put('/grade', addGradeToStudent);

/**
 * @swagger
 * /teacher/grades/{id}:
 *   get:
 *     summary: Get all grades for a teacher
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Teacher ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of grades
 *       500:
 *         description: Error fetching grades
 */
router.get('/grades/:id', getAllGrades);

export default router;
