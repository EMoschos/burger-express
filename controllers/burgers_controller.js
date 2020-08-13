/* 
Inside the `burgers_controller.js` file, import the following:
   * Express
   * `burger.js`
Create the `router` for the app, and export the `router` at the end of your file.
*/

const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res){
   burger.selectAll(function(result){
      let hbBurger = {
         burgers: result
      };
      console.log(hbBurger);
      res.render("index", hbBurger);
   });
});

module.exports = router;