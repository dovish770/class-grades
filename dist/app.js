"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const teacherRoutes_js_1 = __importDefault(require("./Routes/teacherRoutes.js"));
const studentsRoutes_js_1 = __importDefault(require("./Routes/studentsRoutes.js"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_js_1 = require("./swagger.js");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use('/api', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_js_1.swaggerDocs));
(0, db_1.default)();
app.use('/teacher', teacherRoutes_js_1.default);
app.use('/student', studentsRoutes_js_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
