$(document).ready(function () {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
      
    });
    $(".slider-nav").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: true,
      // centerMode: true,
      focusOnSelect: true,
      initialSlide: 0,
      variableWidth: true,
      swipe: true,
      initialSlide: 0,
    });
  });