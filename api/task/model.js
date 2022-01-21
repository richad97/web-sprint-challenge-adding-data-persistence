const db = require("../../data/dbConfig");

const addToTasks = (obj) => {
  return db("tasks").insert(obj);
};

const getTasks = () => {
  return db("tasks");
};

module.exports = {
  addToTasks,
  getTasks,
};
