"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teacherController_js_1 = require("../controllers/teacherController.js");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/register', teacherController_js_1.teacherRegister);
exports.default = router;
