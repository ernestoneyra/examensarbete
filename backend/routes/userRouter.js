const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const userRouter = express.Router();
const User = require("../models/user");
const data = require("../data");

//Inserting user info
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.insertMany(data.user);
      res.send(user);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  })
);

//Getting all user info
userRouter.get('/', expressAsyncHandler(async (req, res) => {
    const user = await User.find({})
    res.send(user)
}))

module.exports = userRouter