const orm = require("../config/orm.js");

// NEED TO REFACTOR TO INCLUDE table parameter
const burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (vals, cb) {
        orm.insertOne(vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (vals, cb) {
        orm.updateOne(vals, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;