const express = require("express");
const router = express.Router();
const { getSpec } = require("../controllers/get");

// GET SPECIFIC REST

router.get("/api/restaurants/:_id", getSpec);

module.exports = router;
