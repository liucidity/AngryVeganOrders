const db = require("../connection");

const makeOrder = (id) => {
  console.log("ordered made");
  return db.query(`INSERT INTO orders(cart_id) VALUES($1) RETURNING *`, [id]);
};







const getOrders = function () {
  return db.query(`SELECT * FROM orders`);
};
module.exports = { makeOrder, getOrders };
