const express = require('express');
const router = express.Router();
const cartQueries = require('../db/queries/carts');

router.get('/:id', (req, res) => {
  console.log('req.id', req.params.id);
  cartQueries.getCart(req.params.id)
    .then(cart => {
      console.log('get cart from :id ', cart);
      res.json(cart);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.get('/', (req, res) => {
  cartQueries.createEmptyCart()
    .then(cart => {
      console.log('stripped', cart.rows[0]);
      res.json(cart.rows[0]);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.post('/:id', (req, res) => {
  cartQueries.addToCart({ cart_id: req.params.id, ...req.body })
    .then(cart => {
      console.log('cart from post :id', cart);
      res.json(cart);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.put('/:id', (req, res) => {
  console.log(req.params.id);
  console.log('body', req.body);
  cartQueries.removeFromCart({ cart_id: req.params.id, ...req.body })
    .then(cart => {
      console.log('delete cart data', cart);
      res.json(cart);
    })
    .catch(err => {
      console.log(err.message);
    });
});

module.exports = router;
