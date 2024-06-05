const express = require("express");
const router = express.Router();
const {getItems} = require('../controller/items.controller.js');


router.get('/', getItems);

module.exports = router;