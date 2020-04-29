exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      VIN: "123abc",
      make: "BMW",
      model: "M4",
      mileage: 25000,
      transmission: "automatic",
      title: "clean",
    },
    {
      VIN: "234bcd",
      make: "Toyota",
      model: "Tundra",
      mileage: 78000,
      transmission: "automatic",
      title: "salvage",
    },
    {
      VIN: "345cde",
      make: "Mini",
      model: "Cooper",
      mileage: 17000,
      transmission: "manual",
      title: "clean",
    },
  ]);
};
