var typed = new Typed(".typed", {
  strings: [
    "Java Developer .",
    "Software Developer .",
    "Web Developer.",
    "Blogger .",
  ],
  typeSpeed: 50,
  startDelay: 500,
  backSpeed: 30,
  loop: true,
});

$(".particals").buoyant({
  containerClass: "buoyant-container",
  parentClass: "buoyant-parent",
  numberOfItems: 20,
  minRadius: 5,
  maxRadius: 30,
  elementClass: "circles",
});

$(".counter").counterUp({
  delay: 10,
  time: 1500,
});

new WOW().init();

/*-------------------------------
        back to top
    ------------------------------*/
$(document).on("click", ".bottomtotop", function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    2000
  );
});

//define variable for store last scrolltop
var lastScrollTop = "";
$(window).on("scroll", function () {
  var $window = $(window);
  if ($window.scrollTop() > 0) {
    $(".mainmenu-area").addClass("nav-fixed");
  } else {
    $(".mainmenu-area").removeClass("nav-fixed");
  }

  /*---------------------------
          back to top show / hide
      ---------------------------*/
  var st = $(this).scrollTop();
  var ScrollTop = $(".bottomtotop");
  if ($(window).scrollTop() > 1000) {
    ScrollTop.fadeIn(1000);
  } else {
    ScrollTop.fadeOut(1000);
  }
  lastScrollTop = st;
});

$(window).on("load", function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    100
  );

  new WOW().init();
  /*---------------------
          Preloader
      -----------------------*/
  var preLoder = $("#preloader");
  preLoder.addClass("hide");
  // var backtoTop = $('.back-to-top');
  /*-----------------------------
          back to top
      -----------------------------*/
  var backtoTop = $(".bottomtotop");
  backtoTop.fadeOut(100);
});

$("#nav-icon3").click(function () {
  $(this).toggleClass("open");
});

$(document).ready(function () {
  $("#save").click(function () {


    var email = document.forms["myForm"]["email"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var name = document.forms["myForm"]["name"].value;

  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (lname == "") {
    alert("Last Name must be filled out");
    return false;
  }
  if(email !== ""){
    $("#modal").html("Hello <b>world</b>!");
  }
    $("#modal").modal("hide"); 
  });

});
