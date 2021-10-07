const { models, connection } = require("./index");

module.exports = { getUser, getUsers, registerUser,getUserByEmail, updateUser, deleteUser };
async function getUser(username) {
  await connection.init();
  const user = await models.user.find({ username: username });
  // await connection.close();
  return user[0];
}

async function getUsers() {
  await connection.init();
  const users = await models.user
    .find({})
    .select("username _id first_name email");
  // await connection.close();
  return users;
}

async function registerUser(userObj) {
  await connection.init();
  await models.user.create(userObj);
  // await connection.close();
}

async function getUserByEmail(email) {
  await connection.init();
  const user = await models.user.findOne({ email: email });
  // await connection.close();
  return user;
}

async function updateUser(id, userObj) {
    await connection.init();
    const user = await models.user.findOneAndUpdate(
        { _id: id },
        { $set: userObj },
        { new: true }
  )
    console.log(user);
  // await connection.close();
  return user;
}

async function deleteUser(userId) {
  await connection.init();
  await models.user.deleteOne({ _id: userId });
  // await connection.close();
}
