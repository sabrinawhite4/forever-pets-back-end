const { models, connection } = require("./index");

module.exports = {
  getShelter,
  getShelters,
  addShelter,
  updateShelter,
  deleteShelter,
};

async function getShelter(id) {
  await connection.init();
  const shelter = await models.shelter.findById(id);
  // await connection.close();
  return shelter;
}

async function getShelters() {
  await connection.init();
  const shelters = await models.shelter.find({});
  // await connection.close();
  return shelters;
}

async function addShelter(shelterObj) {
  await connection.init();
  const shelter = await models.shelter.create(shelterObj);
  // await connection.close();
  return shelter;
}

async function updateShelter(id, shelterObj) {
  await connection.init();
  const shelter = await models.shelter.findOneAndUpdate(
    { _id: id },
    { $set: shelterObj },
    { new: true }
  );
  // await connection.close();
  return shelter;
}

async function deleteShelter(shelterId) {
  await connection.init();
  await models.shelter.deleteOne({ _id: shelterId });
  // await connection.close();
  return "Shelter Deleted!";
}
