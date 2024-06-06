const express = require('express');
const cors = require('cors');
const { error } = require('console');
const path = require(`path`)

//Inizializations
const app = express();
require('./config/connection');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//static Files
app.use(express.static(path.join(__dirname, './upload')));

//routes
app.use(require('./routes/items.route'));
app.use(require('./routes/user.route'));

//server listening

app.listen(8081, (error) => {
    if (error) {
        console.log(`There was an error: ${error}`);
    }
    else {
        console.log(`Server running on port ${8081}`);
    }
})



