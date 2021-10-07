const { models, connection } = require("./index");

module.exports = {
  getAnimal,
  getAnimals,
  getShelterAnimals,
  addAnimal,
  updateAnimal,
  getAvailableAnimals,
};

async function getAnimal(id) {
  await connection.init();
  const animal = await models.animal.findById(id).populate("shelter_id");
  // await connection.close();
  return animal;
}

async function getAnimals() {
  await connection.init();
  const animals = await models.animal
    .find({})
    .populate("shelter_id")
  // await connection.close();
  return animals;
}

async function getShelterAnimals(id) {
  let animals
  try {
    await connection.init()
    animals = await models.animal.find({ shelter_id: id }).catch(err => console.log(err));
  } catch (err) {
    console.log(err);
  } finally {
    // await connection.close();
    return animals;
  }
}

async function addAnimal(animalObj) {
  await connection.init();
  const animal = await models.animal.create(animalObj);
  // await connection.close();
  return animal;
}

async function updateAnimal(id, animalObj) {
  await connection.init();
  const animal = await models.animal.findOneAndUpdate(
    { _id: id },
    { $set: animalObj },
    { new: true }
  );
  // await connection.close();
  return animal;
}

async function getAvailableAnimals() {
  let animals
  try {
    await connection.init()
    animals = await models.animal.getNotAdopted().catch(err => console.log(err));
  } catch (err) {
    console.log(err);
  } finally {
    // await connection.close();
    return animals;
  }
}