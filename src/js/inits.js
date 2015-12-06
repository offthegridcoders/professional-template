//$('.main-header').parallax({imageSrc: '../assets/headers/header.jpg'});

$(function() {
  function inits() {
    new WOW().init();
  }

  window.onscroll = function (e) {
    if (window.pageYOffset > $(window).height()) {
      $('#mainNav').addClass('main-nav-second');
      $('#mainNav').removeClass('main-nav-first');
    } else {
      $('#mainNav').addClass('main-nav-first');
      $('#mainNav').removeClass('main-nav-second');
    }
  }
});
