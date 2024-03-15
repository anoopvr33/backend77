import express from "express";
import Appointment from "../../db/models/appointmentSchema.js";
import Slot from "../../db/models/slotSchema.js";

const router = express.Router();

//LIST APPOINTMNET BY DOCTOR
router.get("/doctor/:id", async (req, res) => {
  const { id } = req.params;
  const appoinments = await Appointment.find({ doctor: id });
  res.status(200).json(appoinments);
});

//LIST APPOINTMENT BY USER
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const appoinments = await Appointment.find({ user: id });
  res.status(200).json(appoinments);
});

//TAKE APPOINTMENT BY USER
router.post("/", async (req, res) => {
  const body = { ...req.body };
  const slotId = body.slot;
  await Appointment.create(body);
  await Slot.findByIdAndUpdate(slotId, { availablity: false });
  res.status(200).json({ message: "Appointment booked" });
});

//Status

router.post("/status/:id", async (req, res) => {
  const { id } = req.params;
  const body = { ...req.body };
  const slotId = body.slot;
  await Appointment.findByIdAndUpdate(id, body);
  res.status(200).json({ message: "Appointment booked" });
});
export default router;
