"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentController_js_1 = require("../controllers/studentController.js");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/register', studentController_js_1.studentRegister).post('/login', studentController_js_1.studentLogin);
exports.default = router;
