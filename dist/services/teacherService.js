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
exports.createNewTeacher = void 0;
const teacherModel_js_1 = __importDefault(require("../models/teacherModel.js"));
const passwordService_js_1 = require("./passwordService.js");
const createNewTeacher = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password, class: className } = req.body;
    if (!fullName || !email || !password || !className) {
        throw new Error('fields missing! must contain: fullName, email, password, and class name');
    }
    const hashedPassword = yield (0, passwordService_js_1.hashPassword)(password);
    try {
        const newTeacher = new teacherModel_js_1.default({
            fullName,
            email,
            hashedPassword,
            class: className
        });
        const savedTeacher = yield newTeacher.save();
        return savedTeacher;
    }
    catch (error) {
        throw new Error(`Error creating new teacher: ${error.message}`);
    }
});
exports.createNewTeacher = createNewTeacher;
