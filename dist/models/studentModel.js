"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const StudentSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: [true, "please enter your name"],
        maxlength: [50, 'name too long'],
        match: [/^[a-zA-Z]+$/, 'invalid name']
    },
    email: {
        type: String,
        required: [true, 'please enter email'],
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email is not valid']
    },
    password: {
        unique: true,
        required: [true, "please enter password"],
        minlength: [8, 'password must contain at least 8 characters'],
        maxlength: [20, 'password too long'],
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number, and be at least 8 characters long'
        ]
    },
    class: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Class',
        required: true
    }
});
exports.default = mongoose_1.default.model("Student", StudentSchema);
