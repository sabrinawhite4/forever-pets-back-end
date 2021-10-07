const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SheltersSchema = new Schema({
  name: String,
  shelter_bio: String,
  shelter_logo: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  phone_number: String,
  website: String,
  email: String,
  donation_link: String,
  schedule_link: String,
});

module.exports =
  mongoose.models.Shelters || mongoose.model("Shelters", SheltersSchema);
