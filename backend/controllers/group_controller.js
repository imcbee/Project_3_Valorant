const express = require("express");
const router = express.Router();

const { Group } = require("../models/models");

router.get("/", async (req, res) => {
  try {
    const groups = await Group.find({});
    res.json(groups);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Group Create Route
router.post("/", async (req, res) => {
  try {
    res.json(await Group.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// Group Show
router.get("/:id", async (req, res) => {
  try {
    res.json(await Group.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
//Group Update
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Group.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});
// Group Delete
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Group.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
