const mongoose = require("mongoose");

const resSchema = new mongoose.Schema({
  resName: String,
  resAddress: String,
  resNumber: String,
  resHours: String,
  menu: Array,
});

const Restaurant = new mongoose.model("Restaurant", resSchema);

module.exports = { Restaurant };
