const db = require("../../data/dbConfig");

const getTasks = () => {
  return db("tasks")
    .select([
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description",
    ])
    .from("tasks")
    .innerJoin("projects", "tasks.project_id", "projects.project_id");
};

const findById = (task_id) => {
  return db("tasks").where({ task_id });
};

const addToTasks = async (obj) => {
  const [id] = await db("tasks").insert(obj);

  return findById(id);
};
module.exports = {
  addToTasks,
  getTasks,
};
