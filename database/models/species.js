const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpeciesSchema = new Schema({
    species_name: String,
    species_description: String,
    species_info: String,
    icon: String
});

module.exports =
  mongoose.models.Species || mongoose.model("Species", SpeciesSchema);
