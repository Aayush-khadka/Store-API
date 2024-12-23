const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of the Product is required"],
  },
  price: {
    type: Number,
    require: [true, "Product of the Product is required"],
  },
  feature: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 3.0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "baltra", "choice", "bagmati"],
      msg: "{VALUES} are not Supported",
    },
    required: [true, "COMPANY NAME IS REQUIRED"],
  },
});

module.exports = mongoose.model("Product", productSchema);
