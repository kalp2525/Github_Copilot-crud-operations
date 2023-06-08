// write code for basic crud operation in express js

// 1. create a server
const express = require('express');
require('dotenv').config()
// import mongoose module
const mongoose = require('mongoose');
// import routers module
const routers = require('./routers/crudRouter.js');

const app = express();

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
app.use('/crud', routers);

// 3. listen to the port
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
}
);
