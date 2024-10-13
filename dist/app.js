"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import postRouter from "./routes/postRoutes";
// import userRouter from "./routes/userRoutes";
// import { errorHandler } from "./middleware/errorHandler";
const db_1 = __importDefault(require("./config/db"));
// import { swaggerSpec } from "./swagger";
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
(0, db_1.default)();
// app.use("/api/posts", postRouter);
// app.use("/api/users", userRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
