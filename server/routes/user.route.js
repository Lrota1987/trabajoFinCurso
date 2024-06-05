const express = require("express");
const router = express.Router();
const {getUser} = require('../controller/user.controller.js');


router.get('/', getUser);

module.exports = router;