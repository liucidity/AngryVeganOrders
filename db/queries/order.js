const db = require("../connection");

<<<<<<< HEAD
const makeOrder = (data) => {
  console.log("ordere made");
  return db.query(`INSERT INTO orders(total) VALUES($1) RETURNING *`, [30]);
=======
const makeOrder = (id) => {
  console.log("ordered made");
  return db.query(`INSERT INTO orders(cart_id) VALUES($1) RETURNING *`, [id]);
>>>>>>> master
};







const getOrders = function () {
  return db.query(`SELECT * FROM orders`);
};
module.exports = { makeOrder, getOrders };
