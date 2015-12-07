// LIGHTBOXES
function buildModalMessage(copy) {
  var div = $('<div/>').addClass('modal-message-container');
  var div2 = $('<div/>');
  var times = $('<i/>').addClass('fa fa-times-circle');
  var p = $('<p/>')
  var browserHeight = $(window).height();
  var browserWidth = $(window).width();
  var html = div.clone().append(times.clone()).append(div2.clone().append(p.clone().append(copy)));
  return html;
};

function centerModalVertically(modal) {
  var modalHeight = modal.height();
  var browserHeight = $(window).height();
  var browserWidth = $(window).width();
  var newTop = (browserHeight - modalHeight) / 2;
  modal.css('top', newTop);
  modal.css('position', 'fixed');

  var modalWidth = modal.width();
  var newLeft = (browserWidth - modalWidth) / 2;
  modal.css('left', newLeft);
};
