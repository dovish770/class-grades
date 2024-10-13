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
exports.studentLogin = exports.studentRegister = void 0;
const studentService_js_1 = require("../services/studentService.js");
const passwordService_js_1 = require("../services/passwordService.js");
const studentRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newStudent = yield (0, studentService_js_1.createNewStudent)(req);
        res.status(201).json(newStudent);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.studentRegister = studentRegister;
const studentLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "email and password are required." });
    }
    try {
        const student = yield (0, studentService_js_1.getStudent)(email);
        if (!student) {
            res.status(404).json({ message: "student not found." });
        }
        else {
            const isPasswordValid = yield (0, passwordService_js_1.isPasswordCorrect)(password, student);
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
exports.studentLogin = studentLogin;
