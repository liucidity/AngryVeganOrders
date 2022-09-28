const { getCarts } = require("../../../db/queries/carts");

$(() => {
  const $checkout = () => {
    const $check = $(
      ` <body>
    <header id="page-header" class="page-header"></header>
    <main id="main-content">
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
                    src="{item.picture_url}"
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
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                    <!-- price, cart and quantity -->
                    <div class="cart-functions d-flex justify-content-between">
                      <div>
                        <div class="item-price">{item.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <p>subtotal: {cart.total}</p>
            <br />
            <p>tax: {cart.total * 0.12}</p>
            <br />
            <p>TOTAL: {cart.total + tax}</p>
          </div>
          <button type="submit" class="btn btn-success w-50 mt-2 mb-3">
            confirm order
          </button>
          <button type="submit" class="btn btn-danger mt-2 mb-3">
            Edit cart
          </button>
          <div class="card-footer text-muted">Angry Vegan</div>
        </div>
      </div>
    </main>

    <!-- js  -->
    <script src="./views_manager.js s"></script>
    <script src="./scripts/numberInput.js"></script>
    <!-- components  -->
    <script
      type="text/javascript"
      src="./scripts/components/preorder.js"
    ></script>
    <script src="./scripts/components/checkout.js"></script>
  </body>`
    );
    window.$checkout = $checkout;
    return $check;
  };

  const data = []; // bring total and phone number for the user
  $("#orderConfirmation").on("click", () => {
    $.post("/api/order", data).then(() => {});
  });
});
