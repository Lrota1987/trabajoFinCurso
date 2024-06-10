const express = require("express");
const router = express.Router();
const Items = require('../models/items.model');
const storage = require('../config/multer');
const multer = require('multer');
const fs = require('fs');

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

router.get('/deleteItems/:id', async (req, res) => {
        const {id} = req.params;
        console.log('se mete!');
        const item = await Items.findByIdAndDelete(id)
        const arr = item.image.split('/');
        const name = arr[arr.length-1];
        try {
            fs.unlinkSync(`./upload/${name}`);
            console.log('File removed');
        }
        catch (err) {
            console.error('Something wrong happened removing the file: ', err);
        }
        res.json(item);
})

router.put('/updateItem/:id', async (req, res) => {
    const {id} = req.params;
    const { body } = req;
    const item = await Items.findByIdAndUpdate(id, body);
    res.json(item);
})




module.exports = router;