import { Schema, model } from "mongoose";

const orderSchema = Schema({
  medication: {
    type: Schema.Types.ObjectId,
    ref: "Pharmacy",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Order = model("Order", orderSchema);

export default Order;
