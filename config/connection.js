const mysql = require("mysql");
// const util = require("util")

// const connection = mysql.createConnection({
//     // host: "localhost",
//     // port: 3306,
//     // user: "root",
//     // password: "HiAll08",
//     // database: "burgers_db"
//     host: "us-cdbr-east-02.cleardb.com",
//     user: "b83b4e12bf3479",
//     password: "58edf70f",
//     database: "heroku_1d9e6dba9ab6ebf"
// });

let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "HiAll08",
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

// connection.query = util.promisify(connection.query);

module.exports = connection;