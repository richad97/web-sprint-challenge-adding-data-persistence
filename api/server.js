const express = require("express");
const server = express();

const projectRouter = require("./project/project-router");
const resourceRouter = require("./resource/resource-router");
const taskRouter = require("./task/task-router");

server.use(express.json());

server.use("/api/resources", resourceRouter);
server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);

module.exports = server;
