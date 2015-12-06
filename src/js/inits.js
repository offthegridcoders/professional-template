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

  // LIGHTBOXES
  function buildImageLightBox(image) {
    var div = $('<div/>').addClass('image-modal').attr('id', 'imageModal');;
    var img = $('<img/>').addClass('image animated zoomIn');
    var browserHeight = $(window).height();
    var browserWidth = $(window).width();
    var imageHeight;
    var imageWidth;
    var html;
    var i = new Image()

    i.src = image;
    imageHeight = i.height
    imageWidth = i.width

    if (imageWidth > browserWidth) {
      img.css('width', '80%');
    } else {
      img.css('height', '80%');
    }

    html = div.clone().append(img.clone().attr('src', image));
    return html;
  };

  function centerImageVertically(image) {
    var imageHeight = image.height();
    var browserHeight = $(window).height();
    var newTop = (browserHeight - imageHeight) / 2;
    image.css('top', newTop);
  };

  // Opens Modal - Image LightBox
  $('.modal-image-lightbox').click(function() {
    var image = $(this).attr('data');
    $('body').after(buildImageLightBox(image));
    centerImageVertically($('.image-modal img'));
  });

  $(document).on('click', '.image-modal', function(e) {
    if (!$(e.target).hasClass('image')) {
      $('.image-modal').hide();
    }
  });
});
