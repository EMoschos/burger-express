const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function (req, res) {
   burger.selectAll(function (result) {
      let hbBurger = {
         burgers: result
      };
      console.log(hbBurger);
      res.render("index", hbBurger);
   });
});

router.post("/api/burgers", function (req, res) {
   burger.insertOne([req.body.burgerName], function (result) {
      res.json({ id: result.insertID });
   })
})

router.put("/api/burgers/:id", function (req, res) {
   burger.updateOne([req.body.devoured, req.params.id], function (result) {
      if (result.changedRows === 0) {
         return res.status(404).end();
      }
      res.status(200).end();
   });
});

module.exports = router;