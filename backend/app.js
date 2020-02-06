/******import all features displayed on app.js ******/
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mysql = require('mysql');




/**create  connection***/
const db = mysql.createConnection({
  //properties...
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'trespass_tracker'
});

//connect
db.connect((error) => {
  if(error){
    throw error;
  }
  console.log('mysql connected!')
});





/****create variables to import all routes****/
const userRoutes = require("./route/user");
const sensorRoutes = require("./route/sensor");
const locationRoutes = require("./route/location");

/*********
 * morgan used to log incoming requests and
 * to see some information in the terminal
 * ************/
app.use(morgan("dev"));

/*************
 * used to parse the body of incoming requests
 * it does support urlencoded and json data
 * *************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*******
 * prevent cors errors
 * cors errors-> are security mechanisms inforced by the browser
 * *********/
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Origin", "POST, PUT, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
//   next();
// });

//routes which should handle requests
app.use("/user", userRoutes);
app.use("/sensor", sensorRoutes);
app.use("/location", locationRoutes);

/********
 **handling errors section
 **********/
app.use((req, res, next) => {
  const error = new Error("Not Found");
  res.status = 404;
  next(error);
});

//handle errors from anywhere in this application
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
/*******
 * End of handling errors section
 * *********/

module.exports = app;
