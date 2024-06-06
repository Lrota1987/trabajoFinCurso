const mongoose = require("mongoose");
const { appConfig } = require("../config");

const ItemsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "¡Por favor Manué!, debes ingresar un título."]
        },
  
        image: {
            type: String,
            required: [true, "Vamos a ver Manué, si no ingresas una imagen, ¿qué estás haciendo?."]
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