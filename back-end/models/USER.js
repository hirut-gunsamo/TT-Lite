var db = require('../dbconnection'); //reference of dbconnection.js
var User = {
    get: function (table, callback) {
        return db.query("SELECT * FROM " + table, callback);
    },
    getById: function (id, table, callback) {
        return db.query("SELECT * FROM " + table + " WHERE Id=?", [id], callback);
    },
    getByEmail: function (email, table, callback) {
        return db.query("SELECT * FROM " + table + " WHERE email='"+ email+"'" , callback);
    },
    register: function (values, table, callback) {
        return db.query("INSERT INTO " + table + " SET ?", [values], callback);
    },
    delete: function (id, table, callback) {
        return db.query("DELETE FROM " + table + " WHERE Id=?", [id], callback);
    },
    update: function (id, table, values, callback) {
        return db.query("UPDATE " + table + " SET ? WHERE Id=?", [values, id], callback);
    }
};
module.exports = User;