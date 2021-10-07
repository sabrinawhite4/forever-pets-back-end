const {
  createUserBio,
  updateUserBio,
  removeUserBio,
} = require("../database/userBioDb");

module.exports = {
  createUserBio: async (req, res) => {
    console.log("Creating User Bio");
    const id = req.params.id;
    const userBio = await createUserBio(id);
    console.log(userBio);
    if (userBio) {
      res.status(200).send(userBio);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  updateUserBio: async (req, res) => {
    console.log("Updating User Bio");
      const userId = req.params.id;
      const userBio = await updateUserBio({
          userId,
          userBio: req.body.userBio
      }).catch((err) => {
      console.log(err);
    });
    if (userBio) {
      res.status(200).send(userBio);
    } else {
      res.status(404).send({
        error: "Not Found",
      });         
    }
  },
  removeUserBio: async (req, res) => {
    console.log("Deleting User Bio")
    console.log(req.params.id);
    await removeUserBio(req.params.id);
    res.status(200).send("User Bio Deleted!");
  },
};