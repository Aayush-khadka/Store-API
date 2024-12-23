const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await product.find({});
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  // console.log(req.query.name);
  const U_query = req.query.name;
  const products = await product.find(U_query);
  res.status(200).json({ products });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
