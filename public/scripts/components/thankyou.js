$(() => {
  window.createThankPage = {};
  const $thankTemplate = (data) => {
    const $thanks = $(
      `<div>
  <div>
          <div class="card mt-5 text-center">
            <h2 class="mt-5">Thanks now we are happy vegans 🤪</h2>
            <br />
            <br />
            <br />
            <br />
            <h5>order details:</h5>
            <p>order id: ${data.id} order total = $${
        Number(data.subtotal) + Number(data.subtotal * 0.12)
      }</p>
            <p>

              pickup time: ${
                data.pickup_time
                  ? `<span id='pickupTime'>${data.pickup_time}</span>`
                  : `waiting for restaurant`
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
      // const isnull = data[0].pickup_time;

      //set time interval

      //check if data.pickup_time is not null
      const isTime = () => {
        $.get(`/api/order/${orderId}`, (ndata) => {
          // if not then re render with new information.
          console.log("checking...", ndata[0].pickup_time);
          if (ndata[0].pickup_time) {
            clearThanks();
            checkoutElement = window.createThankPage.createThankPage(ndata[0]);
            appendThanksElement(checkoutElement);
            console.log("it changed!!");

            let currentTime = ndata[0].pickup_time;
            console.log("currenttime:", currentTime);
            let interval = setInterval(() => {
              if (currentTime > 0) {
                console.log("iscounting?");
                currentTime = parseInt($("#pickupTime").text().trim());
                currentTime = currentTime - 1;
                $("#pickupTime").text(currentTime);
              } else {
                $("#pickupTime").text("your order is ready!");
                clearInterval(interval);
              }
            }, 1000);

            return clearInterval(time);
          }
        });
      };
      const time = setInterval(isTime, 5000);

      let checkoutElement = window.createThankPage.createThankPage(data[0]);
      appendThanksElement(checkoutElement);
    });

    // clearCheckoutMenu();
  };

  window.thanks.addThanksPage = addThanksPage;
});
