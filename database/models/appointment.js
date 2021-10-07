const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    date: Date,
    shelter_id: { type: Schema.Types.ObjectId, ref: "Shelters" },
    animal_id: { type: Schema.Types.ObjectId, ref: "Animal" },
    is_canceled: {type: Boolean, default: false},
});

module.exports = mongoose.model('Appointments', AppointmentSchema);
