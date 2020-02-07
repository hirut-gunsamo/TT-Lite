# README #

*Description*


Install
```
$ npm install
```
**For use exemplo:**

 1. Create a table in data base for exemple

 **Creating database and table**
```
USE trespass_tracker
CREATE TABLE users (
    Id Int, 
    First_name varchar(255),
    Last_ame varchar(255),
    email varchar(255),
    password varchar(255),
    Date_of_birth varchar(255)
);
CREATE TABLE Location (
  Location_Id int,
  Latitude Double,
  Longitude Double
);  
CREATE TABLE sensors (
  Id int,
  Status int,
  Date Date,
  Time Time,
  Triggered int,
  Location_Id int,
  Sensors_type varchar(255)
);  

```
 2. Config a data base connect in dbconnection.js

```
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
  database: 'trespass_tracker'
});
module.exports = connection;
```
 3. Start aplication
Into folter project make **npm run dev**

 4. Test with your table
http://localhost:3000/
result => success: true, 


Thanks!
