const express = require("express");
const router = express.Router();
const orderqueries = require("../db/queries/order");
const { sendMessage } = require("../public/send_sms");
router.get("/", (req, res) => {});

router.post("/", (req, res) => {
  return orderqueries.makeOrder("any").then((order) => {
    sendMessage();
    console.log("from router:", order);
    res.json(order);
  });
});

module.exports = router;
