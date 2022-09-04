/////////////carrusel//////////////

var current = 0;
function carrusel() {
  var numImages = 10;
  if (numImages <= 3) {
    $(".right-arrow").css("display", "none");
    $(".left-arrow").css("display", "none");
  }
  if (numImages > current + 3) {
    current = current + 1;
  } else {
    current = 0;
  }

  $(".carrusel").animate(
    { left: -$("#product_" + current).position().left },
    500
  );

  return false;
}

$(document).ready(function () {
  setInterval(carrusel, 3000);

  $(".right-arrow").on("click", carrusel);

  $(".left-arrow").on("click", function () {
    if (current > 0) {
      current = current - 1;
    } else {
      current = numImages - 3;
    }

    $(".carrusel").animate(
      { left: -$("#product_" + current).position().left },
      600
    );

    return false;
  });
});

/////////////////acordeon1/////////////////

$(document).ready(function () {
  $(".acordeon").on("click", ".acordeon-cabecera", function () {
    $(this).toggleClass("active").next().slideToggle();
  });
});

///////////////////acordeon2/////////////////

$(document).ready(function () {
  $(".accordion-list > li > .answer").hide();

  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});
