const {
  getAnimal,
  getAnimals,
  addAnimal,
  updateAnimal,
  getAvailableAnimals,
} = require("../database/animalDb");

module.exports = {
  getAnimal: async (req, res) => {
    console.log("Getting Animal");
    const id = req.params.id;

    const animal = await getAnimal(id);
    console.log(animal);
    if (animal) {
      res.status(200).send(animal);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  getAnimals: async (req, res) => {
    console.log("Getting All Animals");
    const animals = await getAnimals();
    console.log(animals);
    if (animals) {
      res.status(200).send(animals);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  getAvailableAnimals: async (req, res) => {
    console.log("Getting Available Animals");
    const animals = await getAvailableAnimals().catch(err => {console.log(err)});
    console.log(animals);
    if (animals) {
      res.status(200).send(animals);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  addAnimal: async (req, res) => {
    console.log("Adding Animal");

      const animal = await addAnimal(req.body).catch(err => { console.log(err)});
      if (animal) {
          res.status(200).send(animal);
      } else {
          res.status(404).send({
              error: "Not Found",
          });
      }
    },
    updateAnimal: async (req, res) => {
        console.log("Updating Animal");
        const id = req.params.id;

        const animal = await updateAnimal(id, req.body);
        console.log(animal);
        if (animal) {
            res.status(200).send(animal);
        } else {
            res.status(404).send({
                error: "Not Found",
            });
        }
    }
};
