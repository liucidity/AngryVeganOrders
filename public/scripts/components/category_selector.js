$(document).ready(function () {
  window.categorySelector = {};

  const createSelectorElement = function (category) {

    let $categorySelect = $(
      `
       <a class="list-group-item list-group-item-action" href="#${category.name}">${category.name}</a>
      `
    )
    return $categorySelect;
  };
  window.categorySelector.createSelectorElement = createSelectorElement;
});
