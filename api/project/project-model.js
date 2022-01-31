const db = require("../../data/dbConfig");

const getProjects = () => {
  return db("projects");
};

const findById = (project_id) => {
  return db("projects").where({ project_id });
};

const addToProjects = async (obj) => {
  const [id] = await db("projects").insert(obj);

  return findById(id);
};

module.exports = {
  addToProjects,
  findById,
  getProjects,
};
