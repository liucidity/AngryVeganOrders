const express = require("express");
const router = express.Router();
const orderQueries = require("../db/queries/order");
const { sendMessage } = require("../public/send_sms");
router.get("/", (req, res) => {});

router.post("/", (req, res) => {
  sendMessage(req.body.phone);
  return orderQueries.makeOrder(req.body.id).then((order) => {
    console.log("from router:", order);
    res.json(order);
  });
});

module.exports = router;
