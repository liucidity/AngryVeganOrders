const express = require("express");
const router = express.Router();
const { pathToPublic } = require('../constants');
// const path = requict
const orderQueries = require("../db/queries/order");

router.get('/', (req, res) => {
  // console.log(__dirname);
  res.sendFile(pathToPublic + 'restaurant.html');
});

// create get route to retrieve orders
router.get('/orders', (req, res) => {
  orderQueries.getOrders()
    .then((orders) => {
      res.json(orders.rows);
    }).catch((err) => {
      console.log(err.message);
    });
});
// router.get('/orders/:id', (req, res) => {
//   orderQueries.getOrders(req.params.id)
//     .then((orders) => {
//       res.json(orders.rows);
//     }).catch((err) => {
//       console.log(err.message);
//     });
// });


router.put('/orders/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  orderQueries.updateOrder({ ...req.body })
    .then((order) => {
      res.json(order.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
})


module.exports = router;
