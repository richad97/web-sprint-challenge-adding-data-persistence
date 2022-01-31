const express = require("express");
const router = express.Router();
const projectModel = require("./project-model");

// [GET] /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await projectModel.getProjects();

    projects.map((obj) => {
      if (obj["project_completed"] === 0) {
        obj["project_completed"] = false;
      } else if (obj["project_completed"] === 1) {
        obj["project_completed"] = true;
      }
    });

    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: "Unexpected error." });
  }
});

// [POST] /api/projects
router.post("/", async (req, res) => {
  try {
    const { project_name } = req.body;

    if (!project_name) {
      res.status(400).json({ message: "Invalid fields." });
    } else {
      const addProject = await projectModel.addToProjects(req.body);

      addProject.map((obj) => {
        if (obj["project_completed"] === 0) {
          obj["project_completed"] = false;
        } else if (obj["project_completed"] === 1) {
          obj["project_completed"] = true;
        }
      });

      res.status(201).json(addProject[0]);
    }
  } catch (err) {
    res.status(500).json({ message: "Unexpected error." });
  }
});

module.exports = router;
