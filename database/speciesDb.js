const { models, connection } = require("./index");

module.exports = { getSpecies, getAllSpecies, addSpecies, updateSpecies };
// TO DO: Adjust user to be found by id.
async function getSpecies(name) {
  await connection.init();
  const species = await models.species.find({ species_name: name });
  await connection.close();

  return species[0];
}

async function getAllSpecies() {
  await connection.init();
  const allSpecies = await models.species.find({});
  await connection.close();
  return allSpecies;
}

async function addSpecies(speciesObj) {
  await connection.init();
  await models.species.create(speciesObj);
  await connection.close();
}

async function updateSpecies(id, speciesObj) {
  await connection.init();
  const species = await models.species.findOneAndUpdate(
    { _id: id },
    { $set: speciesObj },
    { new: true }
  );
  await connection.close();
  return species;
}
