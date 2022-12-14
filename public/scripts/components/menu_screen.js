$(document).ready(function () {
  let currentCart = null;
  const $menuItems = $(`
    <div id="menu-items-container" data-bs-spy="scroll" data-bs-target="#categories-selector" data-bs-offset="20" class="scrollspy-example" tabindex="0">

    </div>


`);
  window.$menuItems = $menuItems;
  window.menuItems = {};

  function addCategoryElement(category) {
    $menuItems.append(category);
  }
  function addMenuElement(item) {
    $menuItems.append(item);
  }

  function clearMenuItems() {
    $menuItems.empty();
  }

  const addMenuItems = function (categoryNames, menuItems) {
    clearMenuItems();
    for (let category of categoryNames) {
      const categoryElement = categoryHeading.createCategoryElement(category);
      addCategoryElement(categoryElement);
      // $('#menu-items-container').append(createCategoryElement(category));
      for (let item of menuItems) {
        if (item.category === category.name) {
          const itemElement = menuItem.createMenuElement(item);
          addMenuElement(itemElement);
          // $('#menu-items-container').append(createMenuElement(item));
        }
      }
    }
  };
  window.menuItems.addMenuItems = addMenuItems;

  const $cartItems = $(`#full-cart-contents`);

  window.$cartItems = $cartItems;
  window.cartItems = {};

  function addCartElement(item) {
    $cartItems.append(item);
  }

  function clearCartItems() {
    $cartItems.empty();
  }

  const addCartItems = function (cartItems) {
    // console.log("cart", cartItems);
    clearCartItems();
    for (let item of cartItems) {
      const cartItemElement = cartItem.createCartElement(item);
      addCartElement(cartItemElement);
    }
  };

  window.cartItems.addCartItems = addCartItems;
});
