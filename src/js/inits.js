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

  function toggleClass(elm, class1, class2) {
    if(elm.hasClass('animate-label')) {
      if (elm.hasClass(class1)) {
        elm.addClass(class2);
        elm.removeClass(class1);
      } else {
        elm.addClass(class1);
        elm.removeClass(class2);
      }
    }
  }

  // Animates Input Label
  $('.animate-label > input').keyup(function() {
    var curLabel = $(this).parent();
    if ($(this)[0].value.length != 0) {
      if (!curLabel.hasClass('lbl-full')) toggleClass(curLabel, 'lbl-empty', 'lbl-full');
    } else {
      if (!curLabel.hasClass('lbl-empty')) toggleClass(curLabel, 'lbl-empty', 'lbl-full');
    }
  });

  // Clears Input Value and Triggers Animation
  $('.animate-label > .fa-times').click(function() {
    var curLabel = $(this).next();
    curLabel.val('');
    toggleClass($(this).parent(), 'lbl-empty', 'lbl-full');;
  });

  // Closes Message Box
  $('.message-box .fa-times').click(function() {
    $(this).parent().parent().slideUp();
  });
});
