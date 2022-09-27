$(document).ready(function () {

  let currentCart = null;

  const $categorySelector = $(`
    <div id="categories-selector" class="list-group flex-row overflow-auto position-sticky sticky-top">

    </div>
    `);

  window.$categorySelector = $categorySelector;
  window.categoriesSelector = {};

  function addCategorySelectElement(category) {
    $categorySelector.append(category);
  };
  function clearCategorySelector() {
    $categorySelector.empty();
  };

  const addCategorySelector = function (categoryNames) {
    clearCategorySelector();
    for (let category of categoryNames) {
      console.log(category);
      const categorySelectorElement = categorySelector.createSelectorElement(category);
      addCategorySelectElement(categorySelectorElement);
    }
  };

  window.categoriesSelector.addCategorySelector = addCategorySelector;





  const $menuItems = $(`
    <section id="menu-items-container">
    <div data-bs-spy="scroll" data-bs-target="#categories-selector" data-bs-smooth-scroll="true" class="scrollspy-menu-items" tabindex="0">
      <p>Loading Menu Items...</p>
    </section
`);
  window.$menuItems = $menuItems;
  window.menuItems = {};


  function addCategoryElement(category) {
    $menuItems.append(category)
  }
  function addMenuElement(item) {
    $menuItems.append(item)
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


  // const loadMenu = function () {
  //   $(function () {
  //     // $.get('/api/carts')
  //     //   .then((cartID) => {
  //     //     currentCart = cartID.id;
  //     //     $.get(`/api/carts/${cartID.id}`, (cartData) => {
  //     //       console.log('cartdata', cartData);
  //     //       renderCart(cartData);
  //     //     });
  //     //   });

  //     $.get('/api/menu', (menuData) => {
  //       $.get('/api/categories', (categoryData) => {
  //         $("#menu-items-container").empty();
  //         addMenuItems(categoryData, menuData);
  //       });
  //     });
  //   });
  // };
  // window.menuItems.loadMenu = loadMenu;
  // loadMenu();

});

