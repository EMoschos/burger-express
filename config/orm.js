const connection = require("./connection.js");
// NEED TO REFACTOR TO INCLUDE table parameter and conditions to make ORM more generic.
const orm = {
    selectAll: function (cb) {
        let query = "SELECT * FROM burger;";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (vals, cb) {
        let query = "INSERT INTO burger (burger_name) VALUES (?);"
        console.log(query)
        connection.query(query, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    updateOne: function (vals, cb) {
        let query = "UPDATE burger SET devoured = ? WHERE id = ?;"
        console.log(query)
        connection.query(query, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;