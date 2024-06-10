const mongoose = require("mongoose");
const { appConfig } = require("../config");
const { ObjectId } = require("mongodb");

const ItemsSchema = new mongoose.Schema(
    {

        title: {
            type: String,
            required: true
        },
  
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    },
    { collection: 'items'}
  );
  
  const Items = mongoose.model("items", ItemsSchema);
  
  module.exports = Items;