$(document).ready(function () {

  const createOrderAccordion = function (order) {

    let $order = $(`
  <div class="accordion-item orderItem${order.id}">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button header${order.id} justify-content-between collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapse${order.id}" aria-expanded="true" aria-controls="collapse${order.id}">
        <!-- order # | order total | user phone number -->
        <div class="row">
          <span>
            Order: #${order.id}
          </span>
          <span>
            Phone: ${order.phone}
          </span>
        </div>
        <div>
        <span>
        ${order.time}
        </span
        <span>
        $${order.subtotal}
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
    $("#restaurant-container").append(orderAccordion);
  };
  const addRowToItemTable = function (orderAccordion, orderId) {
    $(`#table${orderId}`).append(orderAccordion);
  };




  const loadOrders = function () {
    $.get("/restaurant/orders", (orderData) => {
      console.log('orderData from GET: ', orderData);
      for (let order of orderData) {
        const orderId = order.id;
        const cartId = order.cart_id;
        const orderElement = createOrderAccordion(order);
        addOrderToAccordion(orderElement);

        $.get(`/api/carts/${cartId}`, (cartAndItemData) => {
          console.log('cartAndItemData', cartAndItemData);
          for (let item of cartAndItemData) {
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
    const timeValue = $(time).val() + " minutes";

    //turn color yellow
    $(`.header${orderIdValue}`).css("background-color", "lemonchiffon");
    // remove and put at bottom of list
    $("#completed-container").prepend($(`.orderItem${orderIdValue}`));






    const orderData = { orderId: orderIdValue, time: timeValue };

    // update order with pickup time
    $.ajax({
      method: "PUT",
      url: `/restaurant/orders/${orderIdValue}`,
      data: orderData,
    }).done((pickupTime) => {
      $.post("/api/order/update", pickupTime);
      //get the updated pickup time back from database
      // $.get(`/restaurant/orders`, (updatedOrderData) => {

      //   const pickupTime = updatedOrderData.pickup_time;
      //   console.log("updated", updatedOrderData);
      console.log("pickupTime", pickupTime);

      //   //if undefined return early
      //   // post to ordersAPI to send text to user with pickup time
      //   $.post("/api/order/update", pickupTime);

      // });
    });
  });

  module.exports = { loadOrders };
});






