'use strict';
// initaizing Dependencies
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    //Registering the Model
    Article = require('./api/model/articleModel'),
    routes = require('./api/routes/articleRouting');

// Setting Up MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sdaniel', {useMongoClient: true});

// Set Up routing
routes(app);

app.listen(port);
console.log('the Api is running on Port 3000');