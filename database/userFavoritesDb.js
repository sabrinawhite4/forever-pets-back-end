const { models, connection } = require("./index");

module.exports = {
  getFavorites,
  getUserFavorites,
  createFavorites,
  addFavorite,
  removeFavorite,
};

async function getFavorites(id) {
  await connection.init();
  const favorites = await models.userFavorites.find({ user_id: id });
  await connection.close();
  return favorites[0];
}

async function getUserFavorites(user_id) {
  await connection.init();
  const favorites = await models.userFavorites.getUserFavorites(user_id);
  return favorites;
}

async function createFavorites(id) {
  await connection.init();
  const favorites = await models.userFavorites.create({ user_id: id });
  await connection.close();
  return favorites;
}

async function addFavorite(ctx) {
  await connection.init();
  const { userId, animalObjId } = ctx;
  await models.userFavorites.updateOne(
    { user_id: userId },
    { $addToSet: { animalsArray: animalObjId } }
  );
  const newFavorites = await models.userFavorites.find({ user_id: userId });
  await connection.close();
  console.log(newFavorites);
  return newFavorites;
}

async function removeFavorite(ctx) {
  await connection.init();
  const { userId, animalObjId } = ctx;
   await models.userFavorites.updateOne(
     { user_id: userId },
     { $pull: { animalsArray: animalObjId } }
   );
   const newFavorites = await models.userFavorites.find({ user_id: userId });
   await connection.close();
   console.log(newFavorites);
   return newFavorites;
}
