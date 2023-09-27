const express = require('express');

const router = express.Router();

const {getAllProductes,getAllProductesTesting} = require("../controllers/products");

router.route("/").get(getAllProductes);
router.route("/testing").get(getAllProductesTesting);

module.exports = router;