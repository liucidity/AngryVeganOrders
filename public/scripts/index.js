$(document).ready(function () {
  const loadMenu = function () {
    $(function () {
      // $.get('/api/carts')
      //   .then((cartID) => {
      //     currentCart = cartID.id;
      //     $.get(`/api/carts/${cartID.id}`, (cartData) => {
      //       console.log('cartdata', cartData);
      //       renderCart(cartData);
      //     });
      //   });

      $.get('/api/menu', (menuData) => {
        $.get('/api/categories', (categoryData) => {
          menuItems.addMenuItems(categoryData, menuData);
          categoriesSelector.addCategorySelector(categoryData);
          views_manager.show('menu');
        });
      });
    });
  };
  loadMenu();
});
