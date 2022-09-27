const db = require('../connection');

const getCategories = () => {
  return db.query('SELECT * FROM categories;')
    .then(categories => {
      return categories.rows;
    });
};

module.exports = { getCategories };
