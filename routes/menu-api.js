const express = require('express');
const router = express.Router();
const menuQueries = require('../db/queries/menu');

router.get('/', (req, res) => {
  menuQueries.getMenuItems()
    .then(menuItems => {
      res.json(menuItems);
    })
    .catch(err => {
      console.log(err.message);
    });
});


module.exports = router;
