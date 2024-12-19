require("dotenv").config();
//async errors

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes

app.get("/", (req, res) => {
  res.send(
    '<h1> STORE API</h1> <a href="/api/v1/products"> Product Link </a> '
  );
});

//Product route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    app.listen(port, console.log(`App Online At Port: ${port} `));
  } catch (err) {
    console.log(err);
  }
};
start();
