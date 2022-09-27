// const { subtractQuantity } = require('../scripts/quantity-control');
$(document).ready(function () {


  // let currentCart = null;
  // const renderMenu = function (categoryNames, menuItems) {
  //   for (let category of categoryNames) {
  //     $('#menu-items-container').append(createCategoryElement(category));
  //     for (let item of menuItems) {
  //       if (item.category === category.name) {
  //         $('#menu-items-container').append(createMenuElement(item));

  //       }
  //     }
  //   }
  // };


  // const createCategoryElement = function (category) {
  //   let $category = $(`
  // <div id="${category.name}">${category.name}</div>
  // `)
  //   return $category;
  // }

  // const createMenuElement = function (item) {
  //   let $menu = $(`
  //         <div class="menu-item card mb-3 row">
  //           <div class="row g-0">
  //             <!-- image container -->
  //             <div class="col-3">
  //               <img
  //                 src="${item.picture_url}"
  //                 class="img-fluid rounded-start" alt="burger" width="128" height="128">
  //             </div>
  //             <!-- card right section -->
  //             <div class="col-9">
  //               <!-- card body -->
  //               <div class="card-body row">
  //                 <h5 class="card-title">${item.name}</h5>
  //                 <p class="card-text">${item.description}</p>
  //                 <!-- price, cart and quantity -->
  //                 <div class="cart-functions d-flex justify-content-between">
  //                   <div>
  //                     <div class="item-price">$${item.price}</div>
  //                   </div>
  //                   <div>
  //                   <form class="cart-form" id="${item.id}">
  //                     <input type="hidden" class="itemId" value="${item.id}" name="${item.id}" />
  //                     <button class="add-to-cart" type="submit">cart</button>
  //                     <button class="subtract-quantity">-</button>
  //                     <input class="menu-item-quantity" type="number" min="1" max="99" value="1"/>
  //                     <button class="add-quantity">+</button>
  //                   </form>
  //                   </div>
  //                 </div>
  //               </div>

  //             </div>
  //           </div>
  //         </div>
  // `);
  //   return $menu;
  // };



  // const loadMenu = function () {
  //   $(function () {
  //     $.get('/api/carts')
  //       .then((cartID) => {
  //         currentCart = cartID.id;
  //         $.get(`/api/carts/${cartID.id}`, (cartData) => {
  //           console.log('cartdata', cartData);
  //           renderCart(cartData);
  //         });
  //       });

  //     $.get('/api/menu', (menuData) => {
  //       $.get('/api/categories', (categoryData) => {
  //         $("#menu-items-container").empty();
  //         renderMenu(categoryData, menuData);
  //       });
  //     });
  //   });
  // };
  // loadMenu();

  // live handler
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

    // get

    const itemId = $(this).siblings('.itemId')[0];
    const itemIdValue = $(itemId).val();
    const quantity = $(this).siblings('.menu-item-quantity')[0];
    const quantityValue = $(quantity).val();
    const itemData = { itemId: itemIdValue, quantity: quantityValue };

    // $.post(`/api/carts/${currentCart}`, function () {
    //   console.log(itemData);
    //   $(this).siblings('.menu-item-quantity').val();
    // });

    //   $.ajax({
    //     method: "POST",
    //     url: `/api/carts/${currentCart}`,
    //     data: itemData
    //   }).done(
    //     $.get(`/api/carts/${currentCart}`, (cartData) => {
    //       console.log('cartdata', cartData);
    //       renderCart(cartData);
    //     })
    //   );
    // });
    // const renderCart = function (cartData) {
    //   console.log('cartData', cartData);
    //   // does not exist
    //   $('#cart-total-quantity').text(cartData.item_count);
    //   $('#cart-subtotal').text(cartData.subtotal);

    // };

  });
