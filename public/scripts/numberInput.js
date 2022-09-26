$(document).ready(function () {
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
});
