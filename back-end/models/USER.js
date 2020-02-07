var db = require('../dbconnection'); //reference of dbconnection.js

/***************************************************************/
/*          This is model for User                             */
/***************************************************************/

var User = {
    //this function select all data from database and return to server
    get: function (table, callback) {
        return db.query("SELECT * FROM " + table, callback);
    },
    //this function select data based on id and return to server
    getById: function (id, table, callback) {
        return db.query("SELECT * FROM " + table + " WHERE Id=?", [id], callback);
    },
    //this function select user based on user email and return to server
    getByEmail: function (email, table, callback) {
        return db.query("SELECT * FROM " + table + " WHERE email='"+ email+"'" , callback);
    },
    //this function register user or insert user into user database
    register: function (values, table, callback) {
        return db.query("INSERT INTO " + table + " SET ?", [values], callback);
    },
    //this function delete user from user table base on given user id
    delete: function (id, table, callback) {
        return db.query("DELETE FROM " + table + " WHERE Id=?", [id], callback);
    },
    //this function update user information based on user id
    update: function (id, table, values, callback) {
        return db.query("UPDATE " + table + " SET ? WHERE Id=?", [values, id], callback);
    }
};
module.exports = User;