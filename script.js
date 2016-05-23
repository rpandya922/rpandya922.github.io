$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  function addHover() {
    $(".bar").addClass("hover");
  }

  function removeHover() {
    $(".bar").removeClass("hover");
  }

  $(".button").on("mouseover", function() {
    addHover();
  });

  $(".button").on("mouseout", function() {
    removeHover();
  });

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});
