const db = require('../connection');

const getMenuItems = () => {
  return db.query('SELECT menu_items.name, price, picture_url, description, categories.name AS category FROM menu_items JOIN categories ON category_id = categories.id;')
    .then(menuItems => {
      return menuItems.rows;
    });
};

module.exports = { getMenuItems };
