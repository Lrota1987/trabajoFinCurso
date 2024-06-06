const express = require("express");
const router = express.Router();
const User = require('../models/user.model');


router.get('/getUser', async (req, res)=>{
    const user = await User.find();
    res.json(user);
})

module.exports = router;