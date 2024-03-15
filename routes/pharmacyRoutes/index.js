import express from "express";
import Pharmacy from "../../db/models/pharmacySchema.js";
import checkToken from "../../middleware/checktoken.js";

const router = express.Router();

router.post("/", checkToken(["DOCTOR"]), async (req, res) => {
  const body = { ...req.body };
  await Pharmacy.create(body);
  res.status(200).json({ message: "pharmacy added" });
});

router.get("/", checkToken(["DOCTOR", "USER"]), async (req, res) => {
  const pharmacy = await Pharmacy.find();
  res.status(200).json(pharmacy);
});

router.get("/:id", checkToken, async (req, res) => {
  const { id } = req.params;
  const pharmacy = await Pharmacy.findById(id);
  res.status(200).json(pharmacy);
});

export default router;
