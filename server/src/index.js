import express from "express";
import cors from "cors"; // Used to create the rules between the frontend and the backend communication
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
dotenv.config();

const port = process.env.PORT;
const mongodb_uri = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.send("Hello");
}); // Ah yes the verification purpose

async function connection() {
  await mongoose
    .connect(mongodb_uri)
    .then(
      app.listen(port, () =>
        // yarn run server
        console.log(`Server running on http://localhost:${port}`)
      )
    )
    .catch((e) => console.log(`Error Occured ${e}`));
}

connection();
