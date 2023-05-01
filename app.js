const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const bodyParser = require("body-parser");

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to Database Successfully");
});

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
