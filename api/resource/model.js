const db = require("../../data/dbConfig");

const addToResources = (obj) => {
  return db("resources").insert(obj);
};

const getResources = () => {
  return db("resources");
};

module.exports = {
  addToResources,
  getResources,
};
