import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/users.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({ username });

  if (user) {
    return res.json({ message: "User Already Exists" });
  }

  // 10 is the cost factor. https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt/17238#17238
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "Successful" });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({ username });

  if (!user) {
    return res.json({ message: "user does't exist" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.json({ message: "username or password incorrect" });
  }

  const token = jwt.sign({ id: user._id }, process.env.secret);
  res.json({ token, userID: user._id });
});

export { router as userRouter };
