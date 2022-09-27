const { Pool } = require('pg/lib');
const db = require('../connection');

const getCarts = (id) => {
  return db.query(`SELECT * FROM carts WHERE id = $1;`, [id])
    .then(cart => {
      return cart.rows[0];
    });
};

const createEmptyCart = () => {
  console.log('cart created');
  return db.query(`INSERT INTO carts DEFAULT VALUES RETURNING *;`);
};


// wip : append cart id, item_id, and quantity to cart
// check if quantity accumulator works
const addToCart = (id, item) => {
  let queryParams = [];
  for (let key in item) {
    queryParams.push(item[key]);
  }

  return db.query(`
    INSERT INTO cart_menu_items (cart_id, menu_item_id, quantity)
      VALUES ($1, $2, $3);
  `, [2, 2, 3]);

  //   return db.query(`
  //     DO
  //     $do$
  //     BEGIN
  //       IF EXISTS (SELECT * FROM cart_menu_items
  //         WHERE menu_item_id = $2)
  //       THEN
  //         UPDATE cart_menu_items
  //         SET quantity = (quantity + $3);
  //       ELSE
  //       INSERT INTO cart_menu_items (cart_id, menu_item_id, quantity)
  //       VALUES ($1, $2, $3);
  //     END
  //     $do$
  //   `, [1, 2, 3]);
};

module.exports = { getCarts, createEmptyCart, addToCart };
