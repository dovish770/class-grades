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
exports.teacherRegister = void 0;
const teacherService_js_1 = require("../services/teacherService.js");
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
