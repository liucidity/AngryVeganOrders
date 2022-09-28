$(document).ready(function () {
  window.categorySelector = {};

  const createSelectorElement = function (category) {
    let $categorySelect = $(
      `
       <a class="list-group-item list-group-item-action" href="#${category.name}">${category.name}</a>
      `
    );
    return $categorySelect;
  };
  window.categorySelector.createSelectorElement = createSelectorElement;
});
const $categorySelector = $(`
    <div id="categories-selector" class="list-group flex-row overflow-auto position-sticky sticky-top">

    </div>
    `);

window.$categorySelector = $categorySelector;
window.categoriesSelector = {};

function addCategorySelectElement(category) {
  $categorySelector.append(category);
}
function clearCategorySelector() {
  $categorySelector.empty();
}

const addCategorySelector = function (categoryNames) {
  clearCategorySelector();
  for (let category of categoryNames) {
    // console.log(category);
    const categorySelectorElement =
      categorySelector.createSelectorElement(category);
    addCategorySelectElement(categorySelectorElement);
  }
};

window.categoriesSelector.addCategorySelector = addCategorySelector;
