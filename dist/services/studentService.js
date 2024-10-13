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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewStudent = void 0;
const studentModel_js_1 = __importDefault(require("../models/studentModel.js"));
const passwordService_js_1 = require("./passwordService.js");
const createNewStudent = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
        throw new Error('fields missing! must contain: fullName, email and password');
    }
    const hashedPassword = yield (0, passwordService_js_1.hashPassword)(password);
    try {
        const newStudent = new studentModel_js_1.default({
            fullName,
            email,
            password: hashedPassword,
        });
        const savedStudent = yield newStudent.save();
        return { student: savedStudent, message: 'Student created successfully! Please select a class.' };
    }
    catch (error) {
        throw new Error(`Error creating new student: ${error.message}`);
    }
});
exports.createNewStudent = createNewStudent;
