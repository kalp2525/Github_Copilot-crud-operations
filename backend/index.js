// write code for basic crud operation in express js

// 1. create a server
const express = require('express');
require('dotenv').config()
// import mongoose module
const mongoose = require('mongoose');
// import routers module
const routers = require('./routers/grievancesRouter.js');
const cors = require("cors");
// import cloudinary module
const cloudinary = require('cloudinary').v2;
const bodyParser = require("body-parser")

// configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET_KEY
});

const app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());

// connect to mongodb
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

app.use(express.json());

// 2. create a route
app.get('/', (req, res) => {
    res.send('Welcome to the home page.');
}
);

// user routers here
app.use('/grievance', routers);

// 3. listen to the port
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
}
);
