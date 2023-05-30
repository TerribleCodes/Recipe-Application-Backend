import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username: username });

  if (user) {
    return res.json({ message: "User already exists" });
  }

  res.json({ user });
});

router.post("/login", async (req, res) => {});

export { router as userRouter };
