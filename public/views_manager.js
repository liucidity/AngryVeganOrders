$(() => {
  const $main = $("#main-content");

  window.views_manager = {};

  window.views_manager.show = function (item) {
    window.$categorySelector.detach();
    window.$menuItems.detach();
    window.$preorder.detach();
    window.$checkout.detach();
    window.$thanks.detach();
    $main.empty();

    switch (item) {
      case "menu":
        $categorySelector.appendTo($main);
        $menuItems.appendTo($main);
        break;
      case "preorder":
        $preorder.appendTo($main);
        break;
      case "checkout":
        $checkout.appendTo($main);
        break;
      case "thanks":
        $thanks.appendTo($main);
        break;

      case "error": {
        views_manager.show("menu");
      }
    }
  };
});
