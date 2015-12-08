$(function() {

  function removeActiveClassFromEach(elements) {
    elements.each(function() {
      $(this).removeClass('active-item')
    });
  };

  function collapseAll() {
    $('.accordian-child').each(function() {
      $(this).slideUp();
    });
  };

  function addActiveClass(elm) {
    $(elm).addClass('active-item');
  };

  $('.accordian .accordian-parent').click(function(e) {
    if ($(e.target).hasClass('active-item')) return;
    collapseAll();
    var mainContainer = $('.accordian .accordian-parent');
    removeActiveClassFromEach(mainContainer, 'active-item');
    addActiveClass(e.target);
    var accordianChild = $(e.target).next('.accordian-child');
    accordianChild.slideToggle();
  });
});
