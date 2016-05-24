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

  function showHome() {
      $(".homeScreen").addClass("show");
  }

  function hideHome() {
    $(".homeScreen").removeClass("show");
  }

  function showAbout() {
    $(".aboutScreen").addClass("show");
    $(".aboutText").addClass("show");
  }

  function hideAbout() {
    $(".aboutScreen").removeClass("show");
    $(".aboutText").removeClass("show");
  }

  $(".sidebar-anchor.about").on("click tap", function() {
    showAbout();
    hideHome();
  });

  $(".sidebar-anchor.homep").on("click tap", function() {
    showHome();
    hideAbout();
  })

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});
