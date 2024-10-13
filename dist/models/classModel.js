"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClassSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: [20, 'class name too must contain not more then 20 characters'],
        trim: true
    },
    students: {
        type: [mongoose_1.Types.ObjectId],
        ref: 'Student',
        default: []
    }
});
exports.default = ClassSchema;
