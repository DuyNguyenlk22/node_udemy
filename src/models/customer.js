const mongoose = require("mongoose");

// shape data
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    address: String,
    phone: String,
    email: String,
    description: String,
    image: String,
  },
  { timestamps: true },
);
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
