$(() => {
  const $preorderobj = $(
    `<div>
  <nav class="navbar navbar-light bg-light">
    <button class="btn" id="back-to-cart-btn"><i class="fa-solid fa-arrow-left"></i> Back</button>
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
  </nav>
  <header class="m-5">
    <h2 class="text-center">We Won't Sell Your Information 🤞</h2>
  </header>
  <div class="card text-center">
    <div class="card-header"></div>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">
        Get notified when your food is ready for pickup - you can also get
        special promotion alerts
      </p>

      <div class="container">
        <form id="numberInput">
          <p>Enter your phone number:</p>
          <input id="phone" type="tel" name="phone" />
          <br />
          <input type="submit" class="btn btn-primary w-50 mt-2" value="Next" />
        </form>
        <div class="alert alert-info" style="display: none"></div>
      </div>
    </div>
    <div class="card-footer text-muted"></div>
  </div>
 <script type="text/javascript" src="./scripts/components/preorder.js"></script>

</div>
`
  );
  window.$preorder = $preorderobj;
  //////////////////trello just form for cellphone input//////////////////////////
  const phoneInputField = document.querySelector("#phone");
  const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "ca",
    preferredCountries: ["ca", "mx"],
    geoIpLookup: getIp,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
  const info = document.querySelector(".alert-info");

  function getIp(callback) {
    fetch("https://ipinfo.io/json?token=<your token>", {
      headers: { Accept: "application/json" },
    })
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: "us",
        };
      })
      .then((resp) => callback(resp.country));
  }
  //////////////////submit number and creates an user/////////////////////////////////////////


  $("#back-to-cart-btn").click(function () {
    $("#cart-drawer").show();
    $("#page-header").show();
    views_manager.show("menu");
  });
  $("#numberInput").on("submit", function (event) {
    event.preventDefault();
    // console.log("request sended");
    const data = $(this).serialize();
    // console.log('number form data" ', data);

    $.post("/api/users", data).then((d) => {
      // console.log("user:", d);

      $.post("/api/carts/", d).then((data) => {
        // console.log("cartinfo?;", data.id);
        checkout.addCheckoutMenu(data.id);
        views_manager.show("checkout");
      });
    });
  });
});
