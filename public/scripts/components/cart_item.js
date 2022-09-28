$(document).ready(function () {

  window.cartItem = {};

  const createCartElement = function (item) {
    console.log('create cart element item: ', item);
    let $cartItem = $(`
    <div class="item">
      <div class="buttons">
        <span class="delete-btn">x</span>
      </div>

      <div class="image">
        <img class="w-25" src="${item.picture_url}"/>
      </div>

      <div class="description">
        <span>${item.name}</span>
        <span>${item.description}</span>
      </div>
      <form class="full-cart-form">
        <div class="quantity">
          <input type="hidden" class="itemId" value="${item.menu_item_id}"
            name="${item.menu_item_id}" />
          <button class="plus-btn" type="button" name="button">
            +
          </button>
          <input type="number" class="cart-item-quantity" name="name"   value="${item.quantity}"   min="1" max="99">
          <button class="minus-btn" type="button" name="button">
          -
          </button>
        </div>
      </form>

      <div class="total-price">$${item.item_totals}</div>
  </div>
    `);
    return $cartItem;
  };
  window.cartItem.createCartElement = createCartElement;

});
