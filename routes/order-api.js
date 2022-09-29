const express = require("express");
const router = express.Router();
const orderQueries = require("../db/queries/order");
const { sendMessage, sendAlertOwner } = require("../public/send_sms");

router.post("/", (req, res) => {
  console.log('req.body is: ', req.body);
  sendMessage(req.body.telephone);
  sendAlertOwner(req.body.telephone);
  return orderQueries
    .makeOrder(/*req.body.id??? how to link order with cart? */)
    .then((order) => {
      console.log("from router:", order);
      res.json(order);
    });
});

module.exports = router;
