const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    name: String,
    age: Number,
    profile_pic: String,
    animal_bio: String,
    breed: String,
    species: String,
    is_adopted: { type: Boolean, default: false},
    shelter_id: { type: Schema.Types.ObjectId, ref: "Shelters" },
});

AnimalSchema.statics.getNotAdopted = async function () {
    const animal = await this.find({ is_adopted: false }).populate( "shelter_id");
    return animal;
};

module.exports = mongoose.models.Animal || mongoose.model("Animal", AnimalSchema);
