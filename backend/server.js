const express = require("express");
const app = express();
const mongoose = require("mongoose");
const pastWorkRouter = require("./routes/pastworkRouter");
const pastEducationRouter = require("./routes/pasteducationRouter");
const interestRouter = require("./routes/interestRouter");
const contactRouter = require("./routes/contactRouter");
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const workRouter = require("./routes/workRouter");

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
  },
  () => console.log("connected to database")
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("Open", () => console.log("Connected to database"));

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methood: ["GET", "POST"],
  })
);

app.use("/pastwork/contact", contactRouter);
app.use("/pastwork/school", pastWorkRouter);
app.use("/pastwork/education", pastEducationRouter);
app.use("/pastwork/interest", interestRouter);
app.use("/pastwork/user", userRouter);
app.use("/pastwork/work", workRouter);

app.listen(4000, () => console.log("Server Started on 4000"));
