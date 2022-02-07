const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tutorial: {
    type: String,
  },
});

module.exports = mongoose.model("School", schoolSchema);
