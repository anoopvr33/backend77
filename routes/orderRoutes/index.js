import express from "express";
import Order from "../../db/models/orderSchema.js";
import Pharmacy from "../../db/models/pharmacySchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = { ...req.body };
  await Order.create(body);
  res.status(200).json({ messahe: "Order confirmed" });
});

router.get("/pharmacy/:id", async (req, res) => {
  const { id } = req.params;
  const pharmacy = await Pharmacy.find({ pharmacy: id });
  res.status(200).json(pharmacy);
});

export default router;
