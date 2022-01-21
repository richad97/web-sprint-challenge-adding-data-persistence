const express = require("express");
const router = express.Router();
const taskModel = require("./model");

// [POST] /api/projects
router.post("/", async (req, res) => {
  try {
    const addTask = await taskModel.addToTasks(req.body);

    res.status(201).json(addTask);
  } catch (err) {
    console.log(err);
  }
});

// [GET] /api/projects
router.get("/", (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
