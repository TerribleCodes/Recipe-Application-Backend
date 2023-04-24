import mongoose from "mongoose";

export const userModel = mongoose.model(
  "users",
  new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  })
);
