$(() => {
  window.createThankPage = {};
  const $thankTemplate = (data) => {
    const $thanks = $(
      `<div>
  <<div>
          <div class="card mt-5 text-center">
            <h2 class="mt-5">Thanks now we are happy vegans 🤪</h2>
            <br />
            <br />
            <br />
            <br />
            <h5>order details:</h5>
            <p>order id: ${data.id} order total = ${}</p>
            <p>
              pickup time: ${
                data.pickup_time ? data.pickup_time : `waiting for restaurant`
              }

            </p>
            <p>
          </div>
        </div>
</div>
`
    );
    return $thanks;
  };
  window.createThankPage.createThankPage = $thankTemplate;

  const $thanks = $(`<div></div>`);
  window.$thanks = $thanks;

  window.thanks = {};

  const appendThanksElement = (data) => {
    return $thanks.append(data);
  };
  const clearThanks = () => {
    return $thanks.empty();
  };
  const addThanksPage = (orderId) => {
    // console.log("running");

    $.get(`/api/order/${orderId}`, (data) => {
      console.log("data  for thankyou page", data);
      const checkoutElement = window.createThankPage.createThankPage(data[0]);
      appendThanksElement(checkoutElement);
    });

    // clearCheckoutMenu();
  };

  window.thanks.addThanksPage = addThanksPage;
});
