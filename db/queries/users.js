const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const createUser = (phone) => {
  return db
    .query(
      `INSERT INTO users(phone)
  VALUES($1) RETURNING *`,
      [phone]
    )
    .then((data) => {
      return data.rows[0];
    });
};

module.exports = { getUsers, createUser };
