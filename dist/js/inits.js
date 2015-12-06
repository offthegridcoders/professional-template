//$('.main-header').parallax({imageSrc: '../assets/headers/header.jpg'});

$(function() {

  // Initializations
  function initializeSite() {
    new WOW().init();
  }

  initializeSite();

  // Adjusts NavBar Styles
  window.onscroll = function (e) {
    if (window.pageYOffset > navbar.switchPixels) {
      navbar.element.addClass(navbar.secondClass);
      navbar.element.removeClass(navbar.firstClass);
    } else {
      navbar.element.addClass(navbar.firstClass);
      navbar.element.removeClass(navbar.secondClass);
    }
  }
});
