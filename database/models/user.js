const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  passwordHash: String,
  first_name: String,
  last_name: String,
  email: String,
  age: String,
  profile_pic: String,
  phone_number: String,
  profile_bio: String,
  location: String,
  ideal_pet: String,
  is_shelter_employee: { type: Boolean, default: false },
  shelter_id: { type: "ObjectId", ref: "Shelters" },
  user_favorites: { type: "ObjectId", ref: "UserFavorites" },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);