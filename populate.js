require("dotenv").config();

const mongoose = require("mongoose");
const product = require("./models/product");
const connnectDB = require("./db/connect");
const productJson = require("./products.json");

const start = async () => {
  try {
    await connnectDB(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(productJson);
    console.log("SUCCESS");
  } catch (err) {
    console.log(err);
  }
};
start();
