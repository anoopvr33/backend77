import express from "express";
import bcrypt from "bcrypt";
import User from "../../db/models/userSchema.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signp", async (req, res) => {
  const body = { ...req.body };
  const isUser = await User.findOne({ username: body.username });
  if (isUser) {
    return res.status(409).json({ message: "username already taken" });
  }
  if (body.password != body.confirmpassword) {
    return res.status(403).json({ message: "password not match" });
  }
  const hashedpassword = await bcrypt.hash(body.password, 2);
  body.password = hashedpassword;

  await User.create(body);
  res.status(201).json({ message: "signup succesfully" });
});

router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ username: body.username });
  if (!user) {
    return res.status(401).json({ message: "username or password incorrect" });
  }
  const isMatching = await bcrypt.compare(body.password, user.password);
  if (!isMatching) {
    return res.status(401).json({ message: "username or password incorrect" });
  }

  const token = jwt.sign(
    { id: user._id, role: "USER" },
    process.env.USER_SECRET_KEY,
    {
      expiresIn: "7d",
    }
  );

  res.status(200).json({ message: "login succesfully", token: token });
});

router.get("/profile/:id", async (req, res) => {
  const { id } = req.params; //User id
  const user = await User.findById(id); //User id
  user.password = "";
  res.status(200).json(user);
});

export default router;
