const db = require("../connection");

const makeOrder = (data) => {
  console.log("ordered made");
  return db.query(`INSERT INTO orders(total) VALUES($1) RETURNING *`, [30]);
};

module.exports = { makeOrder };
