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

  ItemsSchema.methods.setImgUrl = function setImgUrl(filename) {
    const { host, port} = appConfig;
    this.image = `${host}:${port}/public/${filename}`;
  }
  
  const Items = mongoose.model("items", ItemsSchema);
  
  module.exports = Items;