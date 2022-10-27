const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const app = express();

// ROUTES:
const getRoute = require("./routes/get");
const postRoute = require("./routes/post");

// MIDDLEWARES
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/", getRoute);
app.use("/", postRoute);

// DB CONNECTION
mongoose.connect(process.env.DB_URI, (err) =>
  err ? console.log(err) : console.log("DB Connected")
);

// UNHANDLED ROUTES
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// SERVER

module.exports = app;
