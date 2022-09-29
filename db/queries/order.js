const db = require("../connection");

const makeOrder = (data) => {
  console.log("ordere made");
  return db.query(`INSERT INTO orders(total) VALUES($1) RETURNING *`, [30]);
};







const getOrders = function () {
  return db.query(`SELECT * FROM orders`);
};
module.exports = { makeOrder, getOrders };
