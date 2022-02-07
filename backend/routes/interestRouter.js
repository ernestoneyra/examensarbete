const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const interestRouter = express.Router();
const Interest = require("../models/interest.js");
const data = require("../data");

//Inserting all interests
interestRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    try {
      const interest = await Interest.insertMany(data.interest);
      res.send(interest);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
);

//Getting all interest
interestRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const interest = await Interest.find({});
    res.send(interest);
  })
);

module.exports = interestRouter;
