$(document).on("headerLoaded", function() {
  $('[data-toggle="popover"]').popover();
  $('html').addClass('fill-height-md')
  if (unippear.brand) {
    $("#bcgov-hf-brand").html(unippear.brand);
  }
  if (unippear.menuItems && unippear.menuItems instanceof Array) {
    for (let menuItem of unippear.menuItems) {
      $("#bcgov-hf-header-menu").append(
        $("<a></a>")
          .addClass("nav-item nav-link")
          .attr({ href: menuItem.url })
          .html(menuItem.text)
      );
    }
  }
});
