require("dotenv").config();
require("express-async-errors");
//async errors

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

const connectDB = require("./db/connect");

const productRouter = require("./routes/products");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes

app.get("/", (req, res) => {
  res.send(
    '<h1> STORE API</h1> <a href="/api/v1/products"> Product Link </a> '
  );
});

app.use("/api/v1/products", productRouter);

//Product route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`App Online At Port: ${port} `));
  } catch (err) {
    console.log(err);
  }
};
start();
