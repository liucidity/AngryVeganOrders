const db = require('../connection');

const getMenuItems = () => {
  return db.query('SELECT * FROM menu_items;')
    .then(menuItems => {
      return menuItems.rows;
    });
};

module.exports = { getMenuItems };
