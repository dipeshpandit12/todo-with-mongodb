const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const { user_email, user_password } = req.body;

  const user = await User.findOne({ user_email });

  if (!user) return res.status(400).send("Invalid username or password.");

  const validPassword = await bcrypt.compare(user_password, user.user_password);

  if (!validPassword)
    return res.status(400).send("Invalid username or password.");

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  res.send({ token });
});

router.post("/register", async (req, res) => {
  try {
    const { user_email, user_password } = req.body;

    const existingUser = await User.findOne({ user_email });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user_password, salt);

    const user = new User({
      user_email,
      user_password: hashedPassword,
    });

    const savedUser = await user.save();
    res.json({
      message: "User registered successfully",
      userId: savedUser._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;