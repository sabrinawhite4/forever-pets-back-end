const { models, connection } = require("./index");

module.exports = {
  getAppointment,
  getAppointments,
  createAppointment,
  cancelAppointment,
};

async function getAppointment(id) {
  await connection.init();
  const appointment = await models.appointment
    .findById(id)
    .populate("user_id", "first_name last_name email phone_number")
    .populate("shelter_id")
    .populate("animal_id");
  //  await connection.close();
  return appointment;
}

async function getAppointments() {
  await connection.init();
  const appointments = await models.appointment
    .find({})
    .populate("user_id", "first_name last_name email phone_number")
    .populate("shelter_id")
    .populate("animal_id");
  //  await connection.close();
  return appointments;
}

async function createAppointment(appointmentObj) {
  await connection.init();
  const newAppointment = await models.appointment.create(appointmentObj);
  //  await connection.close();
  return newAppointment;
}

async function cancelAppointment(id) {
  await connection.init();
  const appointment = await models.appointment.findOneAndUpdate(
    { _id: id },
    { $set: { is_canceled: true } },
    { new: true }
  );
  //  await connection.close();
  return appointment;
}
