const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurants");

router.get("/", (req, res) => {
    Restaurants.find()
      .then((restaurants) => {
        console.log(restaurants);
        res.json(restaurants);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  });

  router.post("/", (req, res) => {
    console.log(req.body);
  });

module.exports = router