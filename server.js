'use strict';

var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.end('<h2>They don\'t want me to build an API. <br>So I built Myself an Api</h2><br><h1>Be Ready!!!</h1>');
}).listen(3000);

console.log('the Api is running on Port 3000');