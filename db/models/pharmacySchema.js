import { Schema, model } from "mongoose";

const pharmacySchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: String,
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Pharmacy = model("Pharmacy", pharmacySchema);
export default Pharmacy;
