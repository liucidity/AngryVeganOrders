$(() => {
  window.createCheckout = {};
  const createCheckouts = (item) => {
    const $check = $(
      `
      <nav class="navbar navbar-light bg-light">
        <button class="btn"><i class="fa-solid fa-arrow-left"></i> Back</button>
        <a class="navbar-brand" href="#">
          <img
            src="https://www.angryveganpenticton.ca/app/uploads/Angry-Vegan.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Angry Vegan
        </a>
        <div></div>
      </nav>
      <header class="m-5">
        <h2 class="text-center">Pickup</h2>
      </header>
      <div class="card text-center">
        <div class="card-header">Your items</div>
        <div class="card-body">
          <div class="container" id="">
            <div class="menu-item card mb-3 row">
              <div class="row g-0">
                <!-- image container -->
                <div class="col-3">
                  <img
                    src="${item.picture_url}"
                    class="img-fluid rounded-start"
                    alt="burger"
                    width="128"
                    height="128"
                  />
                </div>
                <!-- card right section -->
                <div class="col-9">
                  <!-- card body -->
                  <div class="card-body row">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <!-- price, cart and quantity -->
                    <div class="cart-functions d-flex justify-content-between">
                      <div>
                        <div class="item-price">${item.subtotal}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <p>subtotal: ${item.subtotal}</p>
            <br />
            <p>tax: ${item.subtotal * 0.12}</p>
            <br />
            <p>TOTAL: ${
              Number(item.subtotal) + Number(item.subtotal * 0.12)
            }</p>
          </div>
          <button type="submit" id='orderConfirmation' class="btn btn-success w-50 mt-2 mb-3">
            confirm order
          </button>
          <button type="submit" class="btn btn-danger mt-2 mb-3">
            Edit cart
          </button>
          <div class="card-footer text-muted">Angry Vegan</div>
        </div>

    <script
      type="text/javascript"
      src="./scripts/components/checkout.js"
    ></script>
      </div>
  `
    );
    return $check;
  };
  window.createCheckout.createCheckout = createCheckouts;

  /////////////////rendering page Window_manager////////////////////////////////////////
  const $checkout = $("<div></div>");

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
      console.log("data", data);
      const checkoutElement = window.createCheckout.createCheckout(data[0]);
      appendCheckoutElement(checkoutElement);
    });

    // clearCheckoutMenu();
  };

  window.checkout.addCheckoutMenu = addCheckoutMenu;

  const data = []; // bring total and phone number for the user
  $("#orderConfirmation").on("click", () => {
    // console.log("cliked");
    $.post("/api/order").then(() => {
      views_manager.show("thanks");
    });
  });
});
