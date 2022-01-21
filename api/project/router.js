const express = require("express");
const router = express.Router();
const projectModel = require("./model");

// [POST] /api/projects
router.post("/", async (req, res) => {
  try {
    const addProject = await projectModel.addToProjects(req.body);

    res.status(201).json(addProject);
  } catch (err) {
    console.log(err);
  }
});

// [GET] /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await projectModel.getProjects();

    res.json(projects);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
