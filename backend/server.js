// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const { PORT, MONGODB_URI } = process.env;
const testController = require("./controllers/test_controller");
const authController = require("./controllers/auth_controller");
const commentController = require("./controllers/comments_controller");
const groupController = require("./controllers/group_controller");

const cors = require("cors");
const morgan = require("morgan");

//Database Connection
mongoose.connect(MONGODB_URI);

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/test", testController);
app.use("/auth", authController);
app.use("/comment", commentController);
app.use("/group", groupController);

// Routes

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen( MONGODB_URI || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
