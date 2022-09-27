$(document).ready(function () {
  let currentCart = null;
  const loadMenu = function () {
    $(function () {
      $.get('/api/carts')
        .then((cartID) => {
          currentCart = cartID.id;
          $.get(`/api/carts/${cartID.id}`, (cartData) => {
            console.log('cartdata', cartData);
            renderCartDrawer(cartData)
          });
        });

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

  $(document).on('click', '.subtract-quantity', function (e) {
    e.preventDefault();
    $(this).siblings('.menu-item-quantity').val(function (n, value) {
      if (value < 2) {
        return value;
      }
      return value - 1;
    });
  });
  $(document).on('click', '.add-quantity', function (e) {
    e.preventDefault();

    $(this).siblings('.menu-item-quantity').val(function (n, value) {
      if (value > 99) {
        return value;
      }
      return parseInt(value, 10) + 1;
    });
  });

  $(document).on('click', '.add-to-cart', function (e) {
    e.preventDefault();

    const itemId = $(this).siblings('.itemId')[0];
    const itemIdValue = $(itemId).val();
    const quantity = $(this).siblings('.menu-item-quantity')[0];
    const quantityValue = $(quantity).val();
    const itemData = { itemId: itemIdValue, quantity: quantityValue };

    // $.post(`/api/carts/${currentCart}`, function () {
    //   console.log(itemData);
    //   $(this).siblings('.menu-item-quantity').val();
    // });

    $.ajax({
      method: "POST",
      url: `/api/carts/${currentCart}`,
      data: itemData
    }).done(
      $.get(`/api/carts/${currentCart}`, (cartData) => {
        console.log('cartdata', cartData);
        renderCartDrawer(cartData);
      })
    );
  });
  const renderCartDrawer = function (cartData) {
    console.log('cartData', cartData);
    $('#cart-total-quantity').text(cartData.item_count);
    $('#cart-subtotal').text(cartData.subtotal);
  };

});

