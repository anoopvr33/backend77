import express from "express";
import Slot from "../../db/models/slotSchema.js";

const router = express.Router();

//ADD SLOTS BY DOCTOR
router.post("/", async (req, res) => {
  const body = { ...req.body };
  await Slot.insertMany(body);
  res.status(201).json({ message: "Slots added" });
});

//LIST SLOTS OF DOCTOR
router.get("/doctor/:id", async (req, res) => {
  const { id } = req.params;
  const slots = await Slot.find({ doctor: id });
  res.status(200).json(slots);
});

export default router;
