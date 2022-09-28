$(document).ready(function () {
  let currentCart = null;
  const loadMenu = function () {
    $(function () {
      $.get('/api/carts')
        .then((cartID) => {
          currentCart = cartID.id;
          console.log('currentCart', currentCart);
          $.get(`/api/carts/${cartID.id}`, (cartData) => {
            // console.log('cartdata', cartData);
            renderCartDrawer(cartData);
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

  $(document).on('click', '.minus-btn', function (e) {
    e.preventDefault();
    $(this).siblings('.cart-item-quantity').val(function (n, value) {
      if (value < 2) {
        console.log(value);
        console.log('too low');
        return value;
      }

      const itemId = $(this).siblings('.itemId')[0];
      const itemIdValue = $(itemId).val();
      const quantityValue = -1;
      const itemData = { itemId: itemIdValue, quantity: quantityValue };

      $.ajax({
        method: "POST",
        url: `/api/carts/${currentCart}`,
        data: itemData
      }).done(
        $.get(`/api/carts/${currentCart}`, (cartData) => {
          console.log('cartdata', cartData);
          cartItems.addCartItems(cartData);
          renderCartDrawer(cartData[0]);
        })
      );
      return value - 1;



    });


  });

  $(document).on('click', '.plus-btn', function (e) {
    e.preventDefault();

    $(this).siblings('.cart-item-quantity').val(function (n, value) {
      if (value > 99) {
        return value;
      }
      const itemId = $(this).siblings('.itemId')[0];
      const itemIdValue = $(itemId).val();
      const quantityValue = 1;
      const itemData = { itemId: itemIdValue, quantity: quantityValue };
      $.ajax({
        method: "POST",
        url: `/api/carts/${currentCart}`,
        data: itemData
      }).done(
        $.get(`/api/carts/${currentCart}`, (cartData) => {
          console.log('cartdata', cartData);
          cartItems.addCartItems(cartData);
          renderCartDrawer(cartData[0]);
        })
      );
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
        renderCartDrawer(cartData[0]);
      })
    );
  });



  $("#cart-drawer").click(function () {
    $.get(`/api/carts/${currentCart}`, (cartData) => {
      console.log('cartdata', cartData);
      cartItems.addCartItems(cartData);
    });
  });
  const renderCartDrawer = function (cartData) {
    console.log('cartData', cartData);
    $('#cart-total-quantity').text(cartData.item_count);
    $('#cart-subtotal').text(cartData.subtotal);
  }
});
