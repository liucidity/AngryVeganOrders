$(document).ready(function () {
  window.categoryHeading = {};

  const createCategoryElement = function (category) {
    let $category = $(`
  <div id="${category.name}">${category.name}</div>
  `);
    return $category;
  };

  window.categoryHeading.createCategoryElement = createCategoryElement;
});
