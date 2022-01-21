const db = require("../../data/dbConfig");

const addToProjects = (obj) => {
  return db("projects").insert(obj);
};

const getProjects = () => {
  return db("projects");
};

module.exports = {
  addToProjects,
  getProjects,
};
