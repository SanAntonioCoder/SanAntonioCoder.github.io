$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  var typed = new Typed(".element", {
    strings: ["Alan Elizondo", "a Developer", "a Designer", "a Businessman"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });
  // progess bars
  var waypoint = new Waypoint({
    element: document.getElementById("exp-id"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:100%;transition:1s all");
      p[1].setAttribute("style", "width:30%;transition:1s all");
      p[2].setAttribute("style", "width:100%;transition:2s all");
      p[3].setAttribute("style", "width:30%;transition:.5s all");
      p[4].setAttribute("style", "width:70%;transition:3s all");
    },
    offset: "90%",
  });

  // Owl Caoursel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
  });

  var filtrized = $(".filtr-container").filterizr({
    animationDuration: 0.5,
  });
});

setTimeout(function () {
  $(".loading").fadeToggle();
}, 1500);
