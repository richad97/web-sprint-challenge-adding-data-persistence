const express = require("express");
const router = express.Router();
const taskModel = require("./task-model");

// [GET] /api/tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await taskModel.getTasks();

    tasks.map((obj) => {
      if (obj["task_completed"] === 0) {
        obj["task_completed"] = false;
      } else if (obj["task_completed"] === 1) {
        obj["task_completed"] = true;
      }
    });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Unexpected error." });
  }
});

// [POST] /api/tasks
router.post("/", async (req, res) => {
  try {
    const { task_description, project_id } = req.body;

    if (!task_description || !project_id) {
      res.status(400).json({ message: "Invalid fields." });
    } else {
      const addTask = await taskModel.addToTasks(req.body);

      addTask.map((obj) => {
        if (obj["task_completed"] === 0) {
          obj["task_completed"] = false;
        } else if (obj["task_completed"] === 1) {
          obj["task_completed"] = true;
        }
      });

      res.status(201).json(addTask[0]);
    }
  } catch (err) {
    res.status(500).json({ message: "Unexpected error." });
  }
});

module.exports = router;
