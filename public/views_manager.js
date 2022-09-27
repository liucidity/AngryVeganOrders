$(() => {
  const $main = $("#main-content");

  window.views_manager = {};

  window.views_manager.show = function (item) {
    $preorder.detach();

    switch (item) {
      case 'menu':
        $categorySelector.appendTo($main);
        $menuItems.appendTo($main);
        break;
      case "preorder":
        $preorder.appendTo($main);
        break;
      case 'error': {
        views_manager.show('menu');
      }
    }
  };
});
