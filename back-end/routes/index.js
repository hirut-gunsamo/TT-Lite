const routes = require('express').Router();
const bodyParser = require('body-parser');
const secretkey = require('../config/secret');
const jwt = require('jsonwebtoken')

// Require routes
const user = require('./user');
const sensor = require('./sensor');
const location = require('./location');

// configure app to use bodyParser()
// this will let us get the data from a POST
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.use((req, res, next) => {
  // do logging
  next(); // make sure we go to the next routes and don't stop here
});

//this is verification function for token it checks if the token is valid
const authGuard = (req, res, next) => {
  
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
  } else {
    return res.sendStatus(403);
  }
  
  jwt.verify(req.token, secretkey, (err, authData)=>{
    if(err) return res.sendStatus(403);
    next();
  });
};
// this response for main "ip:port/" request to check if server is on
routes.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Hello world!' });
});
//this is user related request redirect to user router
routes.use('/user', user);
//this is sensor related requestes redirected to sensor router
routes.use('/sensor', authGuard, sensor);
//this is location related requestes redirected to locatio router
routes.use('/location', authGuard, location);


module.exports = routes;