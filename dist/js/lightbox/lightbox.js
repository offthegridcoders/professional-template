// LIGHTBOXES
function buildImageLightBox(image) {
  var div = $('<div/>').addClass('image-modal').attr('id', 'imageModal');;
  var img = $('<img/>').addClass('image animated zoomIn');
  var browserHeight = $(window).height();
  var browserWidth = $(window).width();
  var imageHeight;
  var imageWidth;
  var html;
  imageHeight = image.height;
  imageWidth = image.width;

  if ((imageWidth > browserWidth) || (imageHeight > browserHeight)) {
    if (imageWidth > browserWidth) {
      img.css('width', '80%');
    } else {
      img.css('height', '80%');
    }
  }

  html = div.clone().append(img.clone().attr('src', $(image).attr('src')));
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
  var i = new Image();
  i.src = $(this).attr('data');
  $(i).on('load', function() {
    $('body').append(buildImageLightBox(i));
    centerImageVertically($('.image-modal img'));
  });
});

$(document).on('click', '.image-modal', function(e) {
  if (!$(e.target).hasClass('image')) {
    $('.image-modal').remove();
  }
});