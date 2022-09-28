const express = require("express");
const router = express.Router();
const orderqueries = require("../db/queries/order");
const { sendMessage } = require("../public/send_sms");
router.get("/", (req, res) => {});

router.post("/", (req, res) => {
  sendMessage(req.body.telephone);
  return orderqueries
    .makeOrder(/*req.body.id??? how to link order with cart? */)
    .then((order) => {
      console.log("from router:", order);
      res.json(order);
    });
});

module.exports = router;