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
const classService_js_1 = require("./classService.js");
const createNewStudent = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password, className } = req.body;
    if (!fullName || !email || !password || !className) {
        throw new Error('fields missing! must contain: fullName, email and password');
    }
    const hashedPassword = yield (0, passwordService_js_1.hashPassword)(password);
    const classExists = yield (0, classService_js_1.IsClassExist)(className);
    if (!classExists) {
        throw new Error('Class does not exist');
    }
    try {
        const newStudent = new studentModel_js_1.default({
            fullName,
            email,
            password: hashedPassword,
            class: classExists
        });
        const savedStudent = yield newStudent.save();
        return { student: savedStudent };
    }
    catch (error) {
        throw new Error(`Error creating new student: ${error.message}`);
    }
});
exports.createNewStudent = createNewStudent;
