const User = require("../models/user.model");

const getUser = async (_req, res) => {
    try {
        let user = await User.find();
        res.status(200).json(user);
    }
    catch  (error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getUser
  };