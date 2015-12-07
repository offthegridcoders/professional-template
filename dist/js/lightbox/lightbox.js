// LIGHTBOXES
function buildImageLightBox(image) {
  var div = $('<div/>').addClass('image-lightbox').attr('id', 'imageLightbox');
  var img = $('<img/>').addClass('image animated ' + lightbox.animation);
  var browserHeight = $(window).height();
  var browserWidth = $(window).width();
  var imageHeight;
  var imageWidth;
  var html;
  imageHeight = image.height;
  imageWidth = image.width;

  // ALL IMAGE DIMENSIONS LARGER THAN BROWSER
    if ((imageWidth >= browserWidth) && (imageHeight >= browserHeight)) {
      if (imageWidth >= imageHeight) {
        img.css('width', lightbox.percent);
      } else { // portrait
        img.css('height', lightbox.percent);
      }
      html = div.clone().append(img.clone().attr('src', $(image).attr('src')));
      return html;
    }

  // IMAGE WIDTH IS GREATER THAN BROWSER WIDTH
    if ((imageWidth >= browserWidth) && (imageHeight <= browserHeight)) {
      img.css('width', lightbox.percent);
      html = div.clone().append(img.clone().attr('src', $(image).attr('src')));
      return html;
    }

  // IMAGE HEIGHT IS GREATER THAN HEIGHT WIDTH
    if ((imageWidth <= browserWidth) && (imageHeight >= browserHeight)) {
      img.css('height', lightbox.percent);
      html = div.clone().append(img.clone().attr('src', $(image).attr('src')));
      return html;
    }

  // IMAGE IS SMALLER THAN BROWSER
    if ((imageWidth <= browserWidth) && (imageHeight <= browserHeight)) {
      html = div.clone().append(img.clone().attr('src', $(image).attr('src')));
      return html;
    }

};

function centerImageVertically(image) {
  var imageHeight = image.height();
  var browserHeight = $(window).height();
  var newTop = (browserHeight - imageHeight) / 2;
  image.css('top', newTop);
};

// Opens Image LightBox
$('.lightbox-image').click(function() {
  var i = new Image();
  i.src = $(this).attr('data');
  $(i).on('load', function() {
    $('body').append(buildImageLightBox(i));
    centerImageVertically($('.image-lightbox img'));
  });
});

$(document).on('click', '.image-lightbox', function(e) {
  if (!$(e.target).hasClass('image')) {
    $('.image-lightbox').remove();
  }
});
