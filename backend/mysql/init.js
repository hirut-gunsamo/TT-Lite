//check if the table exists 
//if table doesn't exits, create them and insert sample data and finally establish the connection.
//if exists, establish the connection.
var mysql = require('mysql')
//var app = require('../app')
//require('dotenv').load();

 let config = {
     host: process.env.HOST,
     user: process.env.USER,
     port: process.env.PORT,
     password: process.env.PASSWORD,
     connectTimeout: 50000,
   };
   var db = mysql.createConnection(config);
   db.connect(function (err) {
     if (err) throw err
    console.log('INITIALIZING DATABASE AND TABLES')
     db.query('CREATE DATABASE IF NOT EXISTS ' + process.env.DB_NAME, function (err, result) {
       if (err) throw err;
       // console.log('Database created');
     });
    db.query('USE ' + process.env.DB_NAME, function (err, result) {
        if (err) throw err;
        // console.log('Database ' + process.env.DB_NAME + ' selected');
      });
    
      db.query(`CREATE TABLE IF NOT EXISTS user(Uid INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(255) NOT NULL, last_ame VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR (255) NOT NULL )`,
    function (err, result) {
      if (err) throw err
      // console.log('table user created'); 
    });
    


db.query(`CREATE TABLE IF NOT EXISTS sensor(Sid INT PRIMARY KEY AUTO_INCREMENT,
    sensorType VARCHAR(255) NOT NULL, status int(32) NOT NULL,
     triggered int(32) NOT NULL, triggered int(32) NOT NULL,  date timestamp(6) NOT NULL,
      )`,
 function (err, result) {
   if (err) throw err
   // console.log('table sensor created'); 
 });

db.query(`CREATE TABLE IF NOT EXISTS location(Lid INT PRIMARY KEY AUTO_INCREMENT,
    location geometry() NOT NULL )`,
 function (err, result) {
   if (err) throw err
   // console.log('table location created'); 
 });

// Ends the connection
db.end(function (err) {
    if (err) {
      return console.log(err.message);
    }
  });
  console.log('INITIALIZATION FINISHED');
});
