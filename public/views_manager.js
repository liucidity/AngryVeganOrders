$(() => {
  const $main = $("#main-content");

  window.views_manager = {};

  window.views_manager.show = function (item) {
    $categorySelector.detach();
    $menuItems.detach();
    $preorder.detach();
    $checkout.detach();

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
      case "error": {
        views_manager.show("menu");
      }
    }
  };
});
