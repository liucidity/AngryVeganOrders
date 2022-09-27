const express = require("express");
const router = express.Router();
const orderqueries = require("../db/queries/order");
router.get("/", (req, res) => {});

router.post("/", (req, res) => {
  return orderqueries.makeOrder("any").then((order) => {
    console.log("from router:", order);
    res.json(order);
  });
});

module.exports = router;
