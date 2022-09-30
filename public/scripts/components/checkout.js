$(() => {
  window.createCheckout = {};
  const createCheckouts = (items) => {
    const $list = $("<div></div>");
    for (const item of items) {
      const $check = $(
        // <nav class="navbar navbar-light bg-light">
        //   <button class="btn"><i class="fa-solid fa-arrow-left"></i> Back</button>
        //   <a class="navbar-brand" href="#">
        //     <img
        //       src="https://www.angryveganpenticton.ca/app/uploads/Angry-Vegan.svg"
        //       width="30"
        //       height="30"
        //       class="d-inline-block align-top"
        //       alt=""
        //     />
        //     Angry Vegan
        //   </a>
        //   <div></div>
        // </nav>
        //   <header class="m-5">
        //   <h2 class="text-center">Pickup</h2>
        // </header>
        //<div class="card-header">Your items</div>
        `<div class="card text-center">
        <div class="card-body">
          <div class="container" id="">
            <div class="menu-item card mb-3 row">
              <div class="row g-0">
                <!-- image container -->

                <!-- card right section -->
                <div class="col-12">
                  <!-- card body -->
                  <div class="card-body row">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <!-- price, cart and quantity -->
                    <div class="cart-functions d-flex justify-content-between">
                      <div>
                        <div class="item-price">${item.item_totals}</div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
      );

      $check.appendTo($list);
    }
    const $final = $(` <div class="card text-center ">
           <p>Your Order:</p>

          <p>Subtotal: $${items[0].subtotal}</p>
          <br />
          <p>Tax: $${(items[0].subtotal * 0.12).toFixed(2)}</p>
          <br />
          <p>TOTAL: $${(Number(items[0].subtotal) + Number(items[0].subtotal * 0.12)).toFixed(2)
      }</p>
          <input type="hidden" id="phoneN" name="custId" value="${items[0].phone
      }">
              <input type="hidden" id="cId" name="custId" value="${items[0].id
      }">
              </div>
              <button type="submit" id='orderConfirmation' class="btn btn-success w-50 mt-2 mb-3">
                Confirm Order
              </button>
              <button type="submit" id="edit-cart" class="btn btn-danger mt-2 mb-3">
                Edit Cart
              </button>
              <div class="card-footer text-muted">Angry Vegan</div>


              </div>
        <script
          type="text/javascript"
          src="./scripts/components/checkout.js"
        ></script>
          </div>`);

    $final.appendTo($list);
    return $list;
  };
  window.createCheckout.createCheckout = createCheckouts;

  /////////////////rendering page Window_manager////////////////////////////////////////
  const $checkout = $(`<div></div>`);

  window.$checkout = $checkout;

  // console.log(window.$checkout);

  window.checkout = {};

  const appendCheckoutElement = (data) => {
    return $checkout.append(data);
  };
  const clearCheckoutMenu = () => {
    return $checkout.empty();
  };
  const addCheckoutMenu = (cartData) => {
    // console.log("running");

    $.get(`/api/carts/${cartData}`, (data) => {
      // console.log("data", data);
      const checkoutElement = window.createCheckout.createCheckout(data);
      appendCheckoutElement(checkoutElement);
    });

    // clearCheckoutMenu();
  };

  // $("#back-to-preorder-btn").click(function () {
  //   views_manager.show("preorder");
  // });
  $("#edit-cart").click(function () {
    $("#cart-drawer").show();
    $("#page-header").show();
    views_manager.show("menu");
  });
  window.checkout.addCheckoutMenu = addCheckoutMenu;

  // bring total and phone number for the user
  $("#orderConfirmation").on("click", () => {
    const data = { id: $("#cId").val(), phone: $("#phoneN").val() };
    // console.log("data for post orders", data);
    $.post("/api/order", data).then((orderData) => {
      // console.log("orderdata:", orderData);
      thanks.addThanksPage(orderData.id);
      views_manager.show("thanks");
    });
  });
});
