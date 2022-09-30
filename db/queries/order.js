const { QueryPage } = require("twilio/lib/rest/autopilot/v1/assistant/query");
const db = require("../connection");

const makeOrder = (id) => {
  console.log("ordered made");
  return db.query(
    `INSERT INTO orders(cart_id) VALUES($1) RETURNING *, (SELECT phone FROM users JOIN carts ON users.id = carts.user_id WHERE carts.id = $1);`,
    [id]
  );
};

// SELECT orders.id,
//   carts.id AS cart_id,
//   menu_items.name,
//   quantity,
//   (SELECT SUM(price*quantity) FROM menu_items
//     JOIN cart_menu_items ON menu_item_id = menu_items.id WHERE cart_id = orders.cart_id) AS subtotal,
//   user_id,
//   users.phone,
//   time,
//   updated_at,
//   pickup_time
//   FROM orders
//   LEFT JOIN carts ON carts.id = cart_id
//   JOIN cart_menu_items ON carts.id = orders.cart_id
//   JOIN menu_items ON menu_item_id = menu_items.id
//   JOIN users ON users.id = carts.user_id
//   GROUP BY orders.id, carts.id, time, updated_at, pickup_time, user_id, users.phone, quantity, menu_items.name;

const getOrders = function () {
  return db.query(`
  SELECT *,
  (SELECT SUM(price*quantity) FROM menu_items
  JOIN cart_menu_items ON menu_item_id = menu_items.id WHERE cart_id = orders.cart_id) AS subtotal,
  (SELECT phone FROM users JOIN carts ON users.id = carts.user_id WHERE carts.id = orders.cart_id) AS phone
  FROM orders
  ORDER BY orders.id;
  `);
};

const getOrderById = (id) => {
  console.log("this is the id:", id);
  return db.query(
    `
  SELECT *,
  (SELECT SUM(price*quantity) FROM menu_items
  JOIN cart_menu_items ON menu_item_id = menu_items.id WHERE cart_id = orders.cart_id) AS subtotal
  FROM orders
  WHERE id = $1;
  `,
    [id]
  );
};

const updateOrder = function (updateData) {
  let queryParams = [];
  for (let key in updateData) {
    queryParams.push(updateData[key]);
  }
  console.log(typeof queryParams[1]);

  //queryParams has 2 elements
  //below query only requires 1 due to '$1' wrapped string placeholder
  return db.query(
    `
  UPDATE orders
  SET pickup_time = $2
  WHERE id = $1
  RETURNING id, pickup_time;
  `,
    [queryParams]
  );
  // return db.query(`
  // UPDATE orders
  // SET pickup_time = NOW() + interval '${queryParams[1]} minutes'
  // WHERE id = ${queryParams[0]}
  // RETURNING id, pickup_time;
  // `);
};
module.exports = { makeOrder, getOrders, updateOrder, getOrderById };
