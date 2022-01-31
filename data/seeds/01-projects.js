exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex("projects")
      //resets primary key
      .truncate()
      .then(function () {
        // Inserts seed entries
        return knex("projects").insert([
          {
            project_id: 1,
            project_name: "project grilled cheese",
            project_description: "make a grilled cheese",
            project_completed: false,
          },
          {
            project_id: 2,
            project_name: "project quesadilla",
            project_description: "make a quesadilla",
            project_completed: true,
          },
        ]);
      })
  );
};
