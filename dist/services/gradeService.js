"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGradeAndPush = void 0;
const gardeModel_js_1 = __importDefault(require("../models/gardeModel.js"));
const studentService_js_1 = require("../services/studentService.js");
const createGradeAndPush = (req, student) => {
    const { subject, score, comment } = req.body;
    const newGrade = new gardeModel_js_1.default({
        subject,
        score,
        comment
    });
    (0, studentService_js_1.pushGradeToStudent)(student, newGrade);
};
exports.createGradeAndPush = createGradeAndPush;
