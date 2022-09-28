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


  //prevent quantity selector from exceeding 100 and going below 1
  $(document).on('keydown keyup change', '.menu-item-quantity', function (e) {
    if ($(this).val() > 100) {
      e.preventDefault();
      $(this).val(100);
    }
    if ($(this).val() < 1) {
      $(this).val(null);
    }

  });

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
      console.log(value);
      if (parseInt(value, 10) > 99) {
        return parseInt(value, 10);
      }
      return parseInt(value, 10) + 1;
    });
  });


  $(document).on('keydown keyup change', '.cart-item-quantity', function (e) {
    if ($(this).val() > 100) {
      e.preventDefault();
      $(this).val(100);
    }
    if ($(this).val() < 1) {
      $(this).val(null);
    }

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

  // WIP: BUG FIX: prevent individual cart item submit
  $('.full-cart-form').on('submit', function () {
    return false;
  });



  $(document).on('click', '.add-to-cart', function (e) {
    e.preventDefault();
    const itemId = $(this).siblings('.itemId')[0];
    const itemIdValue = $(itemId).val();
    const quantity = $(this).siblings('.menu-item-quantity')[0];
    const quantityValue = $(quantity).val();
    console.log('quantityValue', quantityValue);
    const itemData = { itemId: itemIdValue, quantity: quantityValue };

    // $.post(`/api/carts/${currentCart}`, function () {
    //   console.log(itemData);
    //   $(this).siblings('.menu-item-quantity').val();
    // });
    $.ajax({
      method: "POST",
      url: `/api/carts/${currentCart}`,
      data: itemData
    }).done(() => {
      $.get(`/api/carts/${currentCart}`, (cartDrawerData) => {
        console.log('cartdata', cartDrawerData);
        //if undefined return early
        renderCartDrawer(cartDrawerData[0]);
      });
    }
    );
  });


  $(".cart-submit").click(function () {
    views_manager.show('preorder');
  });


  $("#cart-drawer").click(function () {
    $.get(`/api/carts/${currentCart}`, (cartData) => {
      console.log('cartdata', cartData);
      cartItems.addCartItems(cartData);
    });
  });
  const renderCartDrawer = function (cartDrawerData) {
    console.log('cartDrawerData', cartDrawerData);
    $('#cart-total-quantity').text(cartDrawerData.item_count);
    $('#cart-subtotal').text(cartDrawerData.subtotal);
  };
});
