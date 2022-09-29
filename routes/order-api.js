const express = require("express");
const router = express.Router();
const orderQueries = require("../db/queries/order");
const { sendMessage, sendAlertOwner } = require("../public/send_sms");
router.get("/", (req, res) => {});

router.post("/", (req, res) => {
  sendMessage(req.body.phone);

  sendAlertOwner(req.body.phone);
  return orderQueries.makeOrder(req.body.id).then((order) => {
    console.log("from router:", order);

    req.session.orderID = order.rows[0].id;
    console.log(req.session.orderID);
    res.json(order.rows[0]);
  });
});

module.exports = router;
