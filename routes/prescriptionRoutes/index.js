import express from "express";
import Prescription from "../../db/models/prescriptionSchema.js";
import Pharmacy from "../../db/models/pharmacySchema.js";

const router = express.Router();

//LIST PRESCRIPTION USING APPOINTMENT
router.get("/appointment/:id", async (req, res) => {
  const { id } = req.params;
  const prescription = await Prescription.find({ appointment: id });
  res.status(200).json(prescription);
});

//GET MEDICINES USING PRESCRIPTION ID
router.get("/pharmacy/:id", async (req, res) => {
  const { id } = req.params;
  const prescription = await Prescription.findById(id);
  const pharmacy = await Pharmacy.find({
    _id: { $in: prescription.medication },
  });
  res.status(200).json(pharmacy);
});

//ADD PRESCRIPTION BY DOCTOR
router.post("/doctor", async (req, res) => {
  const body = { ...req.body };
  await Prescription.create(body);
  res.status(200).json({ message: "prescription added" });
});

export default router;
