$(document).ready(function () {

  const createOrderAccordion = function (order) {

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
      <table class="table table-striped">
      <thead>
        <tr>
          <th>
            Order Items
          </th>
        </tr>
      </thead>
      <tbody id="table${order.id}">
        <tr>
          <td>#</td>
          <td>Item</td>
          <td>Quantity</td>
        </tr>

      </tbody>
    </table>


      </div>
      <div class="accordion-footer">
        <form class="confirm-form">
          <input type="hidden" class="orderId" value="${order.id}" name="${order.id}" />
          <button class="subtract-time">-</button>
          <input class="order-prep-time" type="number" min="0" max="120" value="10" step="5" />
          <button class="add-time">+</button>
          <button class="confirm-order" type="submit">confirm</button>
        </form>
      </div>
    </div>
  </div>
  `);
    return $order;
  };
  const createOrderItemRowElement = function (item) {

    let $item = $(`
    <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
        </tr>
    `);
    return $item;
  };



  const addOrderToAccordion = function (orderAccordion) {
    $("#restaurant-container").prepend(orderAccordion);
  };
  const addRowToItemTable = function (orderAccordion, orderId) {
    $(`#${orderId}`).append(orderAccordion);
  };




  const loadOrders = function () {
    $.get("/restaurant/orders", (orderData) => {
      console.log('orderData from GET: ', orderData);
      for (let order of orderData) {
        const orderId = order.id;
        const cartId = order.cart_id;
        const orderElement = createOrderAccordion(order);
        addOrderToAccordion(orderElement);

        $.get(`/api/carts/${cartId}`, (cartOrderItems) => {
          for (let item of cartOrderItems) {
            const orderItemElement = createOrderItemRowElement(item);
            addRowToItemTable(orderItemElement, orderId);
          }
        });
      }
      // $.get("/api/categories", (categoryData) => {

      // menuItems.addMenuItems(categoryData, menuData);
      // categoriesSelector.addCategorySelector(categoryData);

    });
  };
  loadOrders();


  // -------------------------------------------------- LIVE CLICK LISTENERS

  $(document).on("click", ".subtract-time", function (e) {
    e.preventDefault();
    $(this)
      .siblings(".order-prep-time")
      .val(function (n, value) {
        if (value < 2) {
          return value;
        }
        return value - 5;
      });
  });
  $(document).on("click", ".add-time", function (e) {
    e.preventDefault();

    $(this)
      .siblings(".order-prep-time")
      .val(function (n, value) {
        console.log(value);
        if (parseInt(value, 10) > 99) {
          return parseInt(value, 10);
        }
        return parseInt(value, 10) + 5;
      });
  });

  $(document).on("keydown keyup change", ".order-prep-time", function (e) {
    if ($(this).val() > 120) {
      e.preventDefault();
      $(this).val(120);
    }

  });

  $(document).on("click", ".confirm-order", function (e) {
    e.preventDefault();
    const orderId = $(this).siblings(".orderId")[0];
    const orderIdValue = $(orderId).val();
    const time = $(this).siblings(".order-prep-time")[0];
    const timeValue = $(time).val();
    console.log("orderId", orderId);
    console.log("orderIdValue", orderIdValue);
    console.log("time", time);
    console.log("timeValue", timeValue);
    // const itemData = { itemId: itemIdValue, quantity: quantityValue };

    // $.post(`/api/carts/${currentCart}`, function () {
    //   console.log(itemData);
    //   $(this).siblings('.menu-item-quantity').val();
    // });
    // $.ajax({
    //   method: "POST",
    //   url: `/api/carts/${currentCart}`,
    //   data: itemData,
    // }).done(() => {
    //   $.get(`/api/carts/${currentCart}`, (cartDrawerData) => {
    //     console.log("cartdata", cartDrawerData);
    //     //if undefined return early
    //     renderCartDrawer(cartDrawerData[0]);
    //   });
    // });
  });



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
