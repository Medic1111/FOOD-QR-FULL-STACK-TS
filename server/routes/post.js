const express = require("express");
const router = express.Router();
const { postNewRes } = require("../controllers/post");
// POST NEW REST

router.post("/api/new", postNewRes);

module.exports = router;
