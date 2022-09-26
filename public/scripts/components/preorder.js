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
});
