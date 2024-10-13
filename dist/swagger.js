"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = exports.swaggerUi = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "teacher api",
        version: '1.0.0',
        description: "register and managing classes students and grades "
    },
    servers: [
        {
            url: 'http://localhost:8080'
        }
    ]
};
const options = {
    swaggerDefinition,
    apis: ['./src/Routes/*.ts', './src/pp.ts']
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(options);
exports.swaggerDocs = swaggerDocs;
