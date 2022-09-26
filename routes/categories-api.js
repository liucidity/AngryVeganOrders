const express = require('express');
const router = express.Router();
const categoryQueries = require('../db/queries/categories');

router.get('/', (req, res) => {
  categoryQueries.getCategories()
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      console.log(err.message);
    });
});


module.exports = router;
