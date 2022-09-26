// const { subtractQuantity } = require('../scripts/quantity-control');

const renderMenu = function (categoryNames, menuItems) {
  for (let category of categoryNames) {
    $('#menu-items-container').append(createCategoryElement(category));
    for (let item of menuItems) {
      if (item.category === category.name) {
        $('#menu-items-container').append(createMenuElement(item));

      }
    }
  }
};

const createCategoryElement = function (category) {
  let $category = $(`
  <div id="${category.name}">${category.name}</div>
  `)
  return $category;
}

const createMenuElement = function (item) {
  let $menu = $(`
          <div class="menu-item card mb-3 row">
            <div class="row g-0">
              <!-- image container -->
              <div class="col-3">
                <img
                  src="${item.picture_url}"
                  class="img-fluid rounded-start" alt="burger" width="128" height="128">
              </div>
              <!-- card right section -->
              <div class="col-9">
                <!-- card body -->
                <div class="card-body row">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.description}</p>
                  <!-- price, cart and quantity -->
                  <div class="cart-functions d-flex justify-content-between">
                    <div>
                      <div class="item-price">$${item.price}</div>
                    </div>
                    <div>
                      <button class="add-to-cart">cart</button>
                      <button class="subtract-quantity">-</button>
                      <input class="menu-item-quantity" type="number" min="1" max="99" value="1">
                      <button class="add-quantity">+</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
  `);
  return $menu;
};




const loadMenu = function () {
  $(function () {
    $.get('/api/menu', (menuData) => {
      $.get('/api/categories', (categoryData) => {

        console.log(menuData);
        $("#menu-items-container").empty();
        renderMenu(categoryData, menuData);
      });
    });
  });
};
loadMenu();
// live handler
$(document).on('click', '.subtract-quantity', function () {
  $(this).siblings('.menu-item-quantity').val(function (n, value) {
    if (value < 2) {
      return value;
    }
    return value - 1;
  });
});
$(document).on('click', '.add-quantity', function () {
  $(this).siblings('.menu-item-quantity').val(function (n, value) {
    if (value > 99) {
      return value;
    }
    return parseInt(value, 10) + 1;
  });
});
