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
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next(); // make sure we go to the next routes and don't stop here
});


const authGuard = (req, res, next) => {
  console.log('token authorization middleware');
  
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
  } else {
    console.log('no bearear')
    return res.sendStatus(403);
    // return res.writeHead(403);
  }
  
  jwt.verify(req.token, secretkey, (err, authData)=>{
    if(err) return res.sendStatus(403);
    next();
  });
};

routes.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Hello world!' });
});

routes.use('/user', user);
routes.use('/sensor', authGuard, sensor);
routes.use('/location', authGuard, location);


module.exports = routes;