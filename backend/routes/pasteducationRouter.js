const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const pastEducationRouter = express.Router();
const Education = require("../models/education.js");
const data = require("../data.js");

//Inserting all education
pastEducationRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    try {
      const education = await Education.insertMany(data.education);
      res.send(education);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
);

//Getting all education
pastEducationRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const education = await Education.find({});
    res.send(education);
  })
);

module.exports = pastEducationRouter;
