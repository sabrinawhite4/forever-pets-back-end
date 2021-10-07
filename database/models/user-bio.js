const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserBioSchema = new Schema({
  bio: String,
  user_id: { type: "ObjectId", ref: "Users" },
});

module.exports =
  mongoose.models.UserBio || mongoose.model("UserBio", UserBioSchema);
