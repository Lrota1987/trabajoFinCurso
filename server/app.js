const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserRouter = require("./routes/user.route.js");
const ItemsRouter = require("./routes/items.route.js");
const {getUser} = require('./controller/user.controller.js');
const { getItem } = require('./controller/items.controller.js');
const { appConfig } = require("./config");
const app = express();

const { host, port } = appConfig;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/public', express.static(`${__dirname}/storage/img`));
app.use('/api/users', UserRouter);
app.use('/api/items', ItemsRouter);

app.get('/users', async function (_req, res) {
  getUser();
});

app.get('/items', async function (_req, res) {
  getItems();
});

/*
app.get('/api/users/:_id',function(req, res) {
  try {
      let {_id} = req.params;
      console.log(typeof(_id));
      const user = User.findById(_id);
      res.status(200).json(user);
  }
  catch (error){
      res.status(500).json({message: error.message});
  }
});*/

app.listen(8081, function () {
  console.log(`App listening on ${host}:${port}`);
});


mongoose.connect('mongodb+srv://admin:admin@cluster-tutorial.odr7y8u.mongodb.net/items')
.then(() => console.log('Connected!'))
.then(() => {
    app.listen(3000, () => {
        console.log("DB running on port 3000");
    });
}).catch(() => { console.log('Connection failed!!')});


/*
const url = 'mongodb+srv://admin:admin@cluster-tutorial.odr7y8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-tutorial';




const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))



const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("items");
    const coll = db.collection("user");
    // find code goes here
    const cursor = coll.findOne({_id: "1"});
    // iterate code goes here
    await console.log(cursor);

    app.get('/api/user/login', (req, res) => {
      res.send(cursor);
  })
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.post('/api/items', (req, res) => {
    console.log('entra');
    mongoose.connect('mongodb+srv://admin:admin@cluster-tutorial.odr7y8u.mongodb.net/items', function(err) {
        if (err) {
            console.log('entra en error');
            throw err;
        }
        console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
    })
})

app.listen(3000, () => console.log('blog server running on port 3000!'))

*/