const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const workRouter = express.Router();
const Work = require("../models/work");
const data = require("../data.js");

//Inserting work data
workRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    try {
      const work = await Work.insertMany(data.work);
      res.send(work);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  })
);

//Get work data
workRouter.get('/', expressAsyncHandler(async (req, res) => {
    const work = await Work.find({})
    res.send(work)
}))

module.exports = workRouter;