$(() => {
  const $preorder = $(
    `<body>
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
    <h2 class="text-center">Enter you mobile Number</h2>
  </header>
  <div class="card text-center">
    <div class="card-header"></div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
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
</body>
`
  );
  window.$preorder = $preorder;

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

  $("#numberInput").on("submit", function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.ajax({
      method: "POST",
      url: "/api/users",
      data,
    }).then(console.log("this works"));
  });

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

  // getAllListings(data).then(function( json ) {
  //   propertyListings.addProperties(json.properties);
  //   views_manager.show('preorders');
  //   a}
});
