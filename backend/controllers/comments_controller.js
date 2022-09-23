const express = require("express");
const router = express.Router();

const { Comment } = require("../models/models");

// Comment Index Route
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Comment Create Route
router.post("/", async (req, res) => {
  try {
    res.json(await Comment.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// Comment Show
router.get("/:id", async (req, res) => {
  try {
    res.json(await Comment.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
// Comment Update
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});
// Comment Delete
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Comment.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
