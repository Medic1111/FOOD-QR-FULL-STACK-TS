const { Restaurant } = require("../models/models");

const postNewRes = async (req, res) => {
  const { resName, resAddress, resNumber, resHours, menu } = req.body;

  const newRes = new Restaurant({
    resName,
    resAddress,
    resNumber,
    resHours,
    menu,
  });

  await newRes.save((err, doc) => {
    err
      ? res.status(500).json({ message: "Server error has occured" })
      : res.status(200).json({ message: doc._id });
  });
};

module.exports = { postNewRes };
