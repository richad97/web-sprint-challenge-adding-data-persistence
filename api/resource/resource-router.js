const express = require("express");
const router = express.Router();
const resourceModel = require("./resource-model");

// [GET] /api/resources
router.get("/", async (req, res) => {
  try {
    const resources = await resourceModel.getResources();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: "Unexpected error." });
  }
});

// [POST] /api/resources
router.post("/", async (req, res) => {
  try {
    const { resource_name } = req.body;

    if (!resource_name) {
      res.status(404).json({ message: "Invalid fields." });
    } else {
      const returned = await resourceModel.addToResources(req.body);
      res.status(201).json(returned[0]);
    }
  } catch (err) {
    res.status(500).json({ message: "Unexpected error." });
  }
});

module.exports = router;
