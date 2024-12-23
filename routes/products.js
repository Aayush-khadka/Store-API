const express = require("express");
const app = express();
const router = express.Router();

const {
  getAllProductsStatic,
  getAllProducts,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
