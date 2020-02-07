var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes')

//here server initiated 
var app = express();
// use body parser to parse body from request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//cors security hundled here
app.use(cors());

app.use('/', routes);
console.log("Server started");

module.exports = app;
