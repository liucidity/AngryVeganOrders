$(document).ready(function () {

  const createOrderAccordion = function (order) {
    console.log('createOrderAccordion orderdata: ', order);
    console.log('orderAccordion created');
    let $order = $(`
  <!-- accordion item -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button justify-content-between collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapse${order.id}" aria-expanded="true" aria-controls="collapse${order.id}">
        <!-- order # | order total | user phone number -->
        <div class="row">
          <span>
            ${order.id}
          </span>
          <span>
            ${order.user}
          </span>
        </div>
        <div>
        <span>
        ${order.time}
        </span
        <span>
        $${order.total}
        </span
        </div>
      </button>
    </h2>
    <!-- accordion body -->
    <div id="collapse${order.id}" class="accordion-collapse collapse card" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body row">
        <div class="col-6">
          column1
        </div>
        <div class="col-6">
          column 2
        </div>
      </div>
      <div class="accordion-footer">
        <form class="cart-form">
          <input type="hidden" class="itemId" value="${order.id}" name="${order.id}" />
          <button class="subtract-time">-</button>
          <input class="order-prep-time" type="number" min="0" max="120" value="10" step="5" />
          <button class="add-time">+</button>
          <button class="confirm-order" type="submit">cart</button>
        </form>
      </div>
    </div>
  </div>
  `);
    return $order;
  };



  const addOrderToAccordion = function (orderAccordion) {
    $("#restaurant-container").prepend(orderAccordion);
  };


  const loadOrders = function () {
    $.get("/restaurant/orders", (orderData) => {
      console.log('orderData from GET: ', orderData);
      for (let order of orderData) {
        const orderElement = createOrderAccordion(order);
        addOrderToAccordion(orderElement);
      }
      // $.get("/api/categories", (categoryData) => {

      // menuItems.addMenuItems(categoryData, menuData);
      // categoriesSelector.addCategorySelector(categoryData);

    });
  };


  loadOrders();


  // $(document).on('click', '.accordion-button', function (e) {
  //   e.preventDefault();

  // });

  // function addCategoryElement(category) {
  //   $menuItems.append(category)
  // }
  // function addMenuElement(item) {
  //   $menuItems.append(item)
  // }

  // function clearMenuItems() {
  //   $menuItems.empty();
  // }

  // const addMenuItems = function (categoryNames, menuItems) {
  //   clearMenuItems();
  //   for (let category of categoryNames) {
  //     const categoryElement = categoryHeading.createCategoryElement(category);
  //     addCategoryElement(categoryElement);
  //     // $('#menu-items-container').append(createCategoryElement(category));
  //     for (let item of menuItems) {
  //       if (item.category === category.name) {
  //         const itemElement = menuItem.createMenuElement(item);
  //         addMenuElement(itemElement);
  //         // $('#menu-items-container').append(createMenuElement(item));
  //       }
  //     }
  //   }
  // };





});
