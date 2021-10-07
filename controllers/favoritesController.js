const {
  getFavorites,
  getUserFavorites,
  createFavorites,
  addFavorite,
  removeFavorite,
} = require("../database/userFavoritesDb");

module.exports = {
  getFavorites: async (req, res) => {
    console.log("Getting Favorites");
    const id = req.params.id;

    const favorites = await getFavorites(id);
    console.log(favorites);
    if (favorites) {
      res.status(200).send(favorites);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  getUserFavorites: async (req, res) => {
    console.log("Getting User Favorites");
    const id = req.params.id;
    const favorites = await getUserFavorites(id);
    console.log(favorites);
    if (favorites) {
      res.status(200).send(favorites);
    } else {
      res.status(404).send({ error: "Not Found" });
    }
  },
  createFavorites: async (req, res) => {
    console.log("Creating Favorites");
    const id = req.params.id;
    const favorites = await createFavorites(id);
    console.log(favorites);
    if (favorites) {
      res.status(200).send(favorites);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  addFavorite: async (req, res) => {
    console.log("Adding Favorite");

    let favorites = await getFavorites(req.body.userId);
    const isFavorite = favorites.animalsArray.includes(req.body.animalObjId);
    
    if (favorites && !isFavorite) {
      favorites = await addFavorite(req.body).catch((err) => {
        console.log(err);
      });
      res.status(200).send(favorites);
    } else {
      res.status(201).send({
        error: "Animal already favorited!",
      });
    }
  },
  removeFavorite: async (req, res) => {
    console.log("Removing Favorite");
    const favorites = await removeFavorite(req.body);
    console.log(favorites);
    if (favorites) {
      res.status(200).send(favorites);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
};
