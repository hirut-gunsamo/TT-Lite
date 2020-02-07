var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
  database: 'trespass_tracker'
});
module.exports = connection;