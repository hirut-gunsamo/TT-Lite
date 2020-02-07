var db = require('../dbconnection'); //reference of dbconnection.js

/***************************************************************/
/*          This is model for sensor                           */
/***************************************************************/

var Sensor = {
    // this request select all data from datase and return to server
    get: function (table, callback) {
        return db.query("SELECT * FROM " + table, callback);
    },
    //this function get data from database based on data id
    getById: function (id, table, callback) {
        return db.query("SELECT * FROM " + table + " WHERE Id=?", [id], callback);
    },
    //this function insert data to database
    insert: function (values, table, callback) {
        return db.query("INSERT INTO " + table + " SET ?", [values], callback);
    },
    //this function delete data from database based on given data id
    delete: function (id, table, callback) {
        return db.query("DELETE FROM " + table + " WHERE Id=?", [id], callback);
    },
    //this function update data on database based on given data id
    update: function (id, table, values, callback) {
        return db.query("UPDATE " + table + " SET ? WHERE Id=?", [values, id], callback);
    }
};
module.exports = Sensor;