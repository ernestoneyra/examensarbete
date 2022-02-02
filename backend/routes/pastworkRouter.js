const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const pastWorkRouter = express.Router();
const School = require("../models/pastwork");
const data = require("../data");

// Getting all work
pastWorkRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    try {
      const school = await School.insertMany(data.school);
      res.send(school);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
);

pastWorkRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const schoolWork = await School.find({});
    res.send(schoolWork);
  })
);

module.exports = pastWorkRouter;
