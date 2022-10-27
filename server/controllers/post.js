const { Restaurant } = require("../models/models");

const postNewRes = async (req, res) => {
  const { genInput, menu } = req.body;

  const newRes = new Restaurant({
    resName: genInput.resName,
    resAddress: genInput.resAddress,
    resNumber: genInput.resNumber,
    resHours: genInput.resHours,
    menu,
  });

  await newRes.save((err, doc) => {
    err
      ? res.status(500).json({ message: "Server error has occured" })
      : res.status(200).json({ message: doc._id });
  });
};

module.exports = { postNewRes };
