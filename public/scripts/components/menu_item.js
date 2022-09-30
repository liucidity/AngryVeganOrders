$(document).ready(function () {

  window.menuItem = {};

  const createMenuElement = function (item) {
    let $menu = $(`
          <div class="menu-item card mb-3 row">
            <div class="row g-0">
              <!-- image container -->
              <div class="col-3">
                <img
                  src="${item.picture_url}"
                  class="img-fluid rounded-start" width="128" height="128">
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
                    <form class="cart-form" id="${item.id}">
                      <input type="hidden" class="itemId" value="${item.id}" name="${item.id}" />
                      <button class="add-to-cart" type="submit">cart</button>
                      <button class="subtract-quantity">-</button>
                      <input class="menu-item-quantity" type="number" min="1" max="99" value="1"/>
                      <button class="add-quantity">+</button>
                    </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
  `);

    return $menu;
  };
  window.menuItem.createMenuElement = createMenuElement;

});
