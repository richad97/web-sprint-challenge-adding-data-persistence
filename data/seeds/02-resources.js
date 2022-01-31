exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_id: 1,
          resource_name: "bread",
          resource_description: "loaf of bread",
        },
        {
          resource_id: 2,
          resource_name: "tortilla",
          resource_description: "flour tortillas",
        },
        {
          resource_id: 3,
          resource_name: "cheese",
          resource_description: "shredded cheese",
        },
        {
          resource_id: 4,
          resource_name: "butter",
          resource_description: "organic butter",
        },
      ]);
    });
};
