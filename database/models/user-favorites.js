const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserFavoritesSchema = new Schema({
    animalsArray: {type: [Schema.Types.ObjectId], ref: 'Animal', default: []},
    user_id: { type: "ObjectId", ref: "User" }
});

UserFavoritesSchema.statics.getUserFavorites = async function (user_id) {
    const favorites = await this.findOne({ user_id: user_id }).populate('animalsArray');
    return favorites;
}

module.exports = mongoose.models.UserFavorites || mongoose.model("UserFavorites", UserFavoritesSchema);
