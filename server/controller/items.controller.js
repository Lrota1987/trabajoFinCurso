const Item = require("../models/items.model");

const getItems = async (_req, res) => {
    try {
        const item = await Item.find();
        res.status(200).json(item);
    }
    catch  (error){
        res.status(500).json({message: error.message});
    }
}

async function addItem (req, res) {
    try {
        const {
            title,
            description
        } = req.body

        const item = Item({
            title,
            description
        })

        if (req.file) {
            const { filename } = req.file;
            item.addItem(filename);
        }
    } catch (e) {
        res.status(500).send({ message: e.message});
    }
}

module.exports = {
    getItems
  };