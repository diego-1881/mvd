$(document).ready(function () {
  // responsive sidebar show/hide
  $("#sidebarCollapse, #sidebar-close").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
  // scroll body to top on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      100
    );
    return false;
  });
  // show back to top button
  $(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll < 50) {
      $("#back-to-top").removeClass("active");
    } else if (scroll >= 200) {
      $("#back-to-top").addClass("active");
    }
  });
});
