$(document).ready(function () {
  window.categoryHeading = {};

  const createCategoryElement = function (category) {
    let $category = $(`
  <div class="categorySections" id="${category.name}">${category.name}</div>
  `);
    return $category;
  };

  window.categoryHeading.createCategoryElement = createCategoryElement;
});
