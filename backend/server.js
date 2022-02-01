const express = require("express");
const app = express();
const mongoose = require("mongoose");
const pastWorkRouter = require("./routes/pastworkRouter");
require('dotenv').config()



mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  
}, () => (
  console.log('connected to database')
));
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('Open', () => console.log('Connected to database'))

app.use(express.json())


app.use('/pastwork/school', pastWorkRouter)

app.listen(4000, () => console.log("Server Started on 4000"));

