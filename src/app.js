import express from "express";
import dotenv from "dotenv";
// import postRouter from "./routes/postRoutes";
// import userRouter from "./routes/userRoutes";
// import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
// import { swaggerSpec } from "./swagger";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
connectDB();
// app.use("/api/posts", postRouter);
// app.use("/api/users", userRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;
