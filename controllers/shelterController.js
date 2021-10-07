const {
  getShelter,
  getShelters,
  addShelter,
  updateShelter,
  deleteShelter,
} = require("../database/shelterDb");
const {
  getShelterAnimals,
} = require("../database/animalDb");

module.exports = {
  getShelter: async (req, res) => {
    console.log("Getting Shelter");
    const id = req.params.id;

    const shelter = await getShelter(id);
    console.log(shelter);
    if (shelter) {
      res.status(200).send(shelter);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  getShelters: async (req, res) => {
    console.log("Getting All Shelters");
    const shelters = await getShelters();
    console.log(shelters);
    if (shelters) {
      res.status(200).send(shelters);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  getShelterAnimals: async (req, res) => {
    console.log("Getting Shelter Animals");
    const id = req.params.id;

    const shelterAnimals = await getShelterAnimals(id);
    console.log(shelterAnimals);
    if (shelterAnimals) {
      res.status(200).send(shelterAnimals);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  addShelter: async (req, res) => {
    console.log("Adding Shelter");

    const shelter = await addShelter(req.body).catch((err) => {
      console.log(err);
    });
    if (shelter) {
      res.status(200).send(shelter);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  updateShelter: async (req, res) => {
    console.log("Updating Shelter");
    const id = req.params.id;

    const shelter = await updateShelter(id, req.body);
    console.log(shelter);
    if (shelter) {
      res.status(200).send(shelter);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  deleteShelter: async (req, res) => {
    console.log("Deleting User");
    console.log(req.params.id);
    await deleteShelter(req.params.id);
    res.status(200).send("Shelter Deleted!");
  },
};
