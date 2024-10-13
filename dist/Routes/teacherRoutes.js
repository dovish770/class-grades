"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teacherController_js_1 = require("../controllers/teacherController.js");
const express_1 = __importDefault(require("express"));
const swagger_js_1 = require("../swagger.js"); // Import Swagger
const router = express_1.default.Router();
// Swagger Route
router.use('/api-docs', swagger_js_1.swaggerUi.serve, swagger_js_1.swaggerUi.setup(swagger_js_1.swaggerDocs));
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
router.post('/register', teacherController_js_1.teacherRegister);
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
router.post('/login', teacherController_js_1.teacherLogin);
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
router.put('/grade', teacherController_js_1.addGradeToStudent);
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
router.get('/grades/:id', teacherController_js_1.getAllGrades);
exports.default = router;
