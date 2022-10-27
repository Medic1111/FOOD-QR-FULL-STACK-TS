const { Restaurant } = require("../models/models");

const getSpec = (req, res) => {
  let id = req.params._id;

  Restaurant.find({ _id: id }, (err, doc) => {
    err
      ? res.status(404).json({ message: "No Restaurants found" })
      : res.status(200).json(doc[0]);
  });
};

module.exports = { getSpec };
