import { Schema, model } from "mongoose";

const appointmentSchema = Schema({
  date: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  slot: {
    type: Schema.Types.ObjectId,
    ref: "Slot",
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "DOCTOR",
  },
  status: {
    type: String,
    enum: ["Booked", "Completed"],
  },
});

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;
