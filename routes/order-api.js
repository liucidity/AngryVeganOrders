const express = require("express");
const router = express.Router();
const orderQueries = require("../db/queries/order");
const { sendMessage, sendAlertOwner, sendUpdate } = require("../public/send_sms");


router.post("/", (req, res) => {
  //reqbody is cart id and phone number
  console.log('text rqbody', req.body);
  return orderQueries.makeOrder(req.body.id)
    .then((order) => {
      console.log("from router:", order.rows[0]);
      sendMessage(order.rows[0]);
      sendAlertOwner(order.rows[0]);
      req.session.orderID = order.rows[0].id;
      console.log(req.session.orderID);
      res.json(order.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
});
router.post("/update", (req, res) => {
  console.log('updatereqBody', req.body);
  sendUpdate(req.body);
  res.json('hello');

});

module.exports = router;
