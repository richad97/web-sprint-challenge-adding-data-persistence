const express = require("express");
const router = express.Router();
const resourceModel = require("./model");

// [POST] /api/projects
router.post("/", async (req, res) => {
  try {
    const addResource = await resourceModel.addToResources(req.body);

    res.status(201).json(addResource);
  } catch (err) {
    console.log(err);
  }
});

// [GET] /api/projects
router.get("/", async (req, res) => {
  try {
    const resources = await resourceModel.getResources();

    res.json(resources);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
