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
const addToCart = (cartItemData) => {
  let queryParams = [];
  for (let key in cartItemData) {
    queryParams.push(cartItemData[key]);
  }
  console.log('qp', queryParams);
  // upsert
  return db.query(`
  INSERT INTO cart_menu_items (cart_id, menu_item_id, quantity)
  VALUES ($1,$2,$3)
  ON CONFLICT (cart_id, menu_item_id) DO UPDATE
  SET cart_id = excluded.cart_id,
      menu_item_id = excluded.menu_item_id,
      quantity = cart_menu_items.quantity + $3
  RETURNING *;
      `, queryParams);
};

module.exports = { getCarts, createEmptyCart, addToCart };
