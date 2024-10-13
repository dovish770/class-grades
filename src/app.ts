import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import teacherRouter from "./Routes/teacherRoutes.js";
import studentRouter from "./Routes/studentsRoutes";
import swaggerUi from 'swagger-ui-express'
// import { swaggerSpec } from "./swagger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
connectDB();

app.use('/teacher', teacherRouter)
app.use('/student', studentRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;