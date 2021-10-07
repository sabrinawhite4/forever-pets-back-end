const {
  getAppointment,
  getAppointments,
  createAppointment,
  cancelAppointment,
} = require("../database/appointmentDb");

module.exports = {
  getAppointment: async (req, res) => {
    console.log("Getting Appointment");
    const id = req.params.id;

    const appointment = await getAppointment(id);
    console.log(appointment);
    if (appointment) {
      res.status(200).send(appointment);
    } else {
      res.status(404).send({ error: "Appointment not found" });
    }
    },
    getAppointments: async (req, res) => {
        console.log("Getting Appointments");
        const appointments = await getAppointments();
        console.log(appointments);
        if (appointments) {
          res.status(200).send(appointments);
        } else {
          res.status(404).send({ error: "Appointments not found" });
        }
    },
    createAppointment: async (req, res) => {
        console.log("Creating Appointment");
        const appointment = req.body;
        const newAppointment = await createAppointment(appointment);
        console.log(newAppointment);
        if (newAppointment) {
          res.status(200).send(newAppointment);
        } else {
          res.status(500).send({ error: "Appointment not created" });
        }
    },
    cancelAppointment: async (req, res) => {
        console.log("Cancelling Appointment");
        const id = req.params.id;

        const appointment = await cancelAppointment(id);
        console.log(appointment);
        if (appointment) {
            res.status(200).send(appointment);
        } else {
            res.status(404).send({ error: "Appointment not found" });
        }
    }
};
