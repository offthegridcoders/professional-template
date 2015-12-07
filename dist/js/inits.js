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

    $('#carousel').carousel({
      images: [
        {src: 'assets/one.jpg', caption: '<h1>First Image</h1>'},
        {src: 'assets/two.jpg', caption: '<h1>Second Image</h1>'},
        {src: 'assets/three.jpg', caption: '<h1>Third Image</h1>'},
        {src: 'assets/four.jpg', caption: '<h1>Fourth Image</h1>'},
        {src: 'assets/five.jpeg', caption: '<h1>Fifth Image</h1>'},
        {src: 'assets/three.jpg', caption: '<h1>Third Image</h1>'},
        {src: 'assets/four.jpg', caption: '<h1>Fourth Image</h1>'},
        {src: 'assets/five.jpeg', caption: '<h1>Fifth Image</h1>'}
      ],
      currentImageIndex: 0,
      useDots: true,
      useThumbnails: false,
      useCaptions: false,
      useArrows: false,
      interval: 2000
    });
  }

  initializeSite();

});
