import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/auth", userRouter);

mongoose.connect(process.env.MONGODB_URI);

app.listen(3001, () => {
  console.log("Server Started");
});
