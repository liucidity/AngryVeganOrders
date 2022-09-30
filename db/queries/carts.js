const { Pool } = require("pg/lib");
const db = require("../connection");

const getCart = (id) => {
  // console.log("cartId", id);
  return db
    .query(
      `
  SELECT carts.id,
  user_id,
  ordered_status,
  (price*quantity) AS item_totals,
  (SELECT SUM(price*quantity) FROM menu_items
    JOIN cart_menu_items ON menu_item_id = menu_items.id WHERE cart_id = $1) AS subtotal,
  (SELECT COUNT(quantity) FROM cart_menu_items WHERE cart_id = $1) AS
    item_count,
  menu_item_id,
  picture_url,
  quantity,
  description,
  menu_items.name,
  users.phone
  FROM carts
  JOIN cart_menu_items ON carts.id = cart_id
  JOIN menu_items ON menu_item_id = menu_items.id
  LEFT JOIN users ON users.id = carts.user_id
  WHERE carts.id = $1
  GROUP BY carts.id, menu_item_id, quantity, menu_items.name, menu_items.price,picture_url, description, users.phone;
 `,
      [id]
    )
    .then((cart) => {
      // console.log(cart);
      return cart.rows;
    });
};

const createEmptyCart = () => {
  // console.log("cart created");
  return db.query(`INSERT INTO carts DEFAULT VALUES RETURNING *;`);
};

// wip : append cart id, item_id, and quantity to cart
// check if quantity accumulator works
const addToCart = (cartItemData) => {
  let queryParams = [];
  for (let key in cartItemData) {
    queryParams.push(cartItemData[key]);
  }
  // console.log("qp", queryParams);
  // upsert
  return db.query(
    `
  INSERT INTO cart_menu_items (cart_id, menu_item_id, quantity)
  VALUES ($1,$2,$3)
  ON CONFLICT (cart_id, menu_item_id) DO UPDATE
  SET cart_id = excluded.cart_id,
      menu_item_id = excluded.menu_item_id,
      quantity = cart_menu_items.quantity + $3
  RETURNING *;
      `,
    queryParams
  );
};

const removeFromCart = (deleteItemData) => {
  // console.log("deleteItemData", deleteItemData);
  let queryParams = [];
  for (let key in deleteItemData) {
    queryParams.push(deleteItemData[key]);
  }
  // console.log("dqp", queryParams);

  return db.query(
    `DELETE FROM cart_menu_items WHERE cart_id = $1 AND menu_item_id = $2`,
    queryParams
  );
};
//// if we have auser cookie we skeep the user screen check (preorder.js)
const addUserToCart = (id) => {
  // console.log("id:", id);
  return db.query(
    `UPDATE carts
SET user_id = $1
WHERE id = (SELECT max(id) FROM carts)
  RETURNING *;
      `,
    [id]
  );
};

module.exports = {
  getCart,
  createEmptyCart,
  addToCart,
  removeFromCart,
  addUserToCart,
};
