const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter user name"],
        },
  
        password: {
            type: String,
            required: true,
        }
    },
    { collection: 'user'}
  );
  
  
  const User = mongoose.model("user", UserSchema);
  
  module.exports = User;

