const express = require("express");
const router = express.Router();
const orderQueries = require("../db/queries/order");
const { sendMessage, sendAlertOwner, sendUpdate } = require("../public/send_sms");


router.post("/", (req, res) => {
  console.log('text rqbody', req.body);
  sendMessage(req.body);
  sendAlertOwner(req.body);
  return orderQueries.makeOrder(req.body.id).then((order) => {
    console.log("from router:", order);
    res.json(order);
  });
});
router.post("/update", (req, res) => {
  console.log('updatereqBody', req.body);
  sendUpdate(req.body);
  res.json('hello');

});

module.exports = router;
