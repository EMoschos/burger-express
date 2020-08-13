/* These are the methods you will need to use in order to retrieve and store data in your database.
selectAll() 
insertOne() 
updateOne()
Export the ORM object in `module.exports`.
*/
var connection = require("./connection.js");
// NEED TO REFACTOR TO INCLUDE table parameter
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
        let query = "UPDATE burger SET burger_name = ?, devour = ? WHERE id = ?;"
        connection.query(query, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;


//==============================================================================
// Example on using Object methods below
// const resistanceFighter = {
//     name: "John Connor",
//     age: 30,
//     title: "Resistance Leader",
//     fight() {
//       return `${this.name} leads the resistance fight against the machines.`
//     }
//   };
//   console.log(Object.entries(resistanceFighter));
//   /* [ [ 'name', 'John Connor' ],
//      [ 'age', 30 ],
//      [ 'title', 'Resistance Leader' ],
//      [ 'fight', [Function: fight] ] ] */
//   for(let [key, value] of Object.entries(resistanceFighter)){
//     console.log(`${key}: ${value}`);
//   }
//   /* name: John Connor
//     age: 30
//     title: Resistance Leader
//     fight: function fight() {
//       return this.name + " leads the resistance fight against the machines.";
//   } */
//   Object.entries(resistanceFighter).forEach(([key, value]) => console.log(`${key}: ${value}`))
//   /* name: John Connor
//     age: 30
//     title: Resistance Leader
//     fight: function fight() {
//       return this.name + " leads the resistance fight against the machines.";
//   } */