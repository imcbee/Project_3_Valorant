// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const { PORT, MONGODB_URI } = process.env;
const testController = require('./controllers/test_controller.js')
// const cors = require("cors");
// const morgan = require("morgan");

//Database Connection
mongoose.connect(MONGODB_URI);

// Middleware
// app.use(express.json());
// app.use(cors());
// app.use(morgan("dev"));
app.use('/test', testController);

// Routes

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/:ext", (req, res) => {
  //res.send("Hello world");
  res.redirect("/test/:ext")
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
