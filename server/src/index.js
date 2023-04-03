import express from "express";
import cors from "cors"; // Used to create the rules between the frontend and the backend communication
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello");
}); // Ah yes the verification purpose

app.listen(process.env.PORT, () =>
  // yarn run server
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
