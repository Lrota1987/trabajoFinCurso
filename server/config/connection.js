'use strict'

const mongoose = require('mongoose');
const { mongoDB } = require('./URI');
/*
mongoose.connect(mongoDB.URI, {}).then(db => console.log('database is on'))
    .catch(err => console.log(err));*/

function connect () {
    try {
         mongoose.connect(mongoDB.URI);
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};

connect();
