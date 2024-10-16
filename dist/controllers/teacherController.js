"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGrades = exports.addGradeToStudent = exports.teacherLogin = exports.teacherRegister = void 0;
const teacherService_js_1 = require("../services/teacherService.js");
const passwordService_js_1 = require("../services/passwordService.js");
const studentService_js_1 = require("../services/studentService.js");
const gradeService_js_1 = require("../services/gradeService.js");
const teacherRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTeacher = yield (0, teacherService_js_1.createNewTeacher)(req);
        res.status(201).json(newTeacher);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.teacherRegister = teacherRegister;
const teacherLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "email and password are required." });
    }
    try {
        const teacher = yield (0, teacherService_js_1.getTeacherByEmail)(email);
        if (!teacher) {
            res.status(404).json({ message: "teacher not found." });
        }
        else {
            const isPasswordValid = yield (0, passwordService_js_1.isPasswordCorrect)(password, teacher);
            if (!isPasswordValid) {
                res.status(400).json({ message: 'Password is incorrect!' });
            }
            else {
                res.status(200).json({ message: "Login successful" });
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
exports.teacherLogin = teacherLogin;
const addGradeToStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.body.studentId;
        console.log(req.body.studentId);
        const student = yield (0, studentService_js_1.getStudentById)(studentId);
        if (!student) {
            res.status(404).json({ message: 'Student was not found!' });
        }
        else {
            const newGrade = yield (0, gradeService_js_1.createGradeAndPush)(req, student);
            yield student.save();
            res.status(200).json(newGrade);
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding grade', error: error.message });
    }
});
exports.addGradeToStudent = addGradeToStudent;
const getAllGrades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = yield (0, teacherService_js_1.getTeacherById)(req.params.id);
        if (!teacher) {
            throw new Error('Teacher not found');
        }
        const students = yield (0, studentService_js_1.getStudentsAndGrades)(teacher.class.id);
        if (!students) {
            throw new Error('no students to show');
        }
        const grades = students.map(student => ({
            fullName: student.fullName,
            grades: student.grades,
        }));
        res.status(200).json(grades);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching grades', error: error.message });
    }
});
exports.getAllGrades = getAllGrades;
