const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  number: {
    type: Number,
    required: [true, "The order must have user's number"],
    set: (value) =>
      value
        .replace(/ORD-/g, "")
        .split("-")
        .map((value) => Number(value)),
  },
  // adjust this schema
  data: String,
  status: {
    type: String,
    required: [true, "The Order must have a status"],
    trim: true,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
  },
  items: {
    type: Object,
    required: [true, "Order must have items"],
  },
  total: {
    type: Number,
    required: [true, "The order must have a total cost"],
  },
});

const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;
