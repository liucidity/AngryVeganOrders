$(document).ready(function () {

  let currentCart = null;
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


});

