//$('.main-header').parallax({imageSrc: '../assets/headers/header.jpg'});

$(function() {

  var navbar = {
    element: $('#mainNav'),
    firstClass: 'main-nav-first',
    secondClass: 'main-nav-second',
    switchPixels: ($(window).height() - 80) // in pixels - when to switch styles
  }

  var lightbox = {
    animation: 'zoomIn',
    percent: '80%'
  }

  // Initializations
  function initializeSite() {
    new WOW().init();
  }

  initializeSite();

});
