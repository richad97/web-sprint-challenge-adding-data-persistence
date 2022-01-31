const db = require("../../data/dbConfig");

const getResources = () => {
  return db("resources");
};

const findById = (resource_id) => {
  return db("resources").where({ resource_id });
};

const addToResources = async (obj) => {
  const [id] = await db("resources").insert(obj);

  return findById(id);
};

module.exports = {
  addToResources,
  findById,
  getResources,
};
