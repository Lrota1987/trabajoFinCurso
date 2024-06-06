const express = require("express");
const router = express.Router();
const Items = require('../models/items.model');
const storage = require('../config/multer');
const multer = require('multer');

const uploader = multer( {
    storage
}).single('image');


router.post('/uploadFile', uploader, async (req, res) => {
    const { body, file } = req;
    if ( body && file ) {
        const newImage = new Items({
            title: body.title,
            image: `http://localhost:8081/${file.filename}`,
            description: body.description
        })
        await newImage.save();
        res.json({
            newImage: newImage
        })
    }
});

router.get('/downloadItems', async (req, res)=>{
    const image = await Items.find();
    res.json(image);
})

router.get(`/downloadItems/:id`, async (req, res)=>{
    const { id } = req.params;
    const image = await Items.findById(id);
    res.json(image);
})




module.exports = router;