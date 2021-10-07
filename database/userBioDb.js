const { models, connection } = require("./index");

module.exports = {
  getUserBio,
  createUserBio,
  updateUserBio,
  removeUserBio,
};

async function getUserBio(id) {
  await connection.init();
  const userBio = await models.userBio.findOne({ user_id: id });
    await connection.close();
    console.log(userBio);
  return userBio;
}

async function createUserBio(id) {
  await connection.init();
  const userBio = await models.userBio.create({ user_id: id });
  await connection.close();
  return userBio;
}

async function updateUserBio(ctx) {
  await connection.init();
  const { userId, userBio } = ctx;
  await models.userBio.updateOne(
    { user_id: userId },
    { bio: userBio }
  );
  const newBio = await models.userBio.find({ user_id: userId });
  await connection.close();
  console.log(newBio);
  return newBio;
}

async function removeUserBio(id) {
      await connection.init();
      await models.userBio.deleteOne({ _id: id });
      await connection.close();
}