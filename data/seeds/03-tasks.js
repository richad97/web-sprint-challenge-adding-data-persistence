exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_id: 1,
          task_description: "heat pan",
          task_notes: "",
          task_completed: true,
          project_id: 1,
        },
        {
          task_id: 2,
          task_description: "butter bread and grill",
          task_notes: "be careful",
          task_completed: false,
          project_id: 1,
        },
        {
          task_id: 3,
          task_description: "flip and finish sandwich",
          task_notes: "",
          task_completed: false,
          project_id: 1,
        },
        {
          task_id: 4,
          task_description: "put cheese on tortilla",
          task_notes: "",
          task_completed: true,
          project_id: 2,
        },
        {
          task_id: 5,
          task_description: "microwave for 30 seconds",
          task_notes: "check every 10 seconds",
          task_completed: true,
          project_id: 2,
        },
      ]);
    });
};
