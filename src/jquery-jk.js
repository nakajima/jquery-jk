// jquery-jk
(function($) {
  // helpers

  $.fn.or = function(alt) {
    return this.size() ? this : $(alt);
  }

  //codez

  function focused() {
    return this.find('.focus');
  }

  function focusOn(dir) {
    if (!this.focused()) {
      return this.find('*:first').addClass('focus');
    }

    var focusedOld = this.focused();
    var focusedNew = focusedOld[dir]();
    if (focusedNew.size()) {
      focusedOld.trigger('focus:lost').removeClass('focus');
      focusedNew.trigger('focus:added').addClass('focus')
    } else {
      this.trigger('paginate:' + dir);
    }
  }

  function selected() {
    return this.find('.selected');
  }

  function selectOn() {
    var focused = this.focused();
    focused.toggleClass('selected').hasClass('selected') ?
      focused.trigger('selection:added') :
      focused.trigger('selection:lost');
  }

  $.fn.focused = focused;
  $.fn.focusOn = focusOn;
  $.fn.selected = selected;
  $.fn.selectOn = selectOn;

  // handlers
  var PREV = 107; // 'k'
  var NEXT = 106; // 'j'
  var SELECT = 120; // 'x'

  function attempt(event) {
    if (!event.which)
      return;

    if (event.which == NEXT)
      $('.jk').focusOn('next');

    if (event.which == PREV)
      $('.jk').focusOn('prev');

    if (event.which == SELECT)
      $('.jk').selectOn();
  }

  $(document).ready(function() {
    $(document).bind('keypress', attempt);
  });

})(jQuery);
