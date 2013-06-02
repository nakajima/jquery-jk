// jquery-jk
(function($) {
  function focused() {
    return this.find('.focus');
  }

  function focusOn(dir) {
    if (!this.focused().length) {
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
  $.jk = {
    PREV: 'k',
    NEXT: 'j',
    SELECT: 'x'
  }

  function nextKey() {
    return $.jk.NEXT.charCodeAt();
  }

  function prevKey() {
    return $.jk.PREV.charCodeAt();
  }

  function selectKey() {
    return $.jk.SELECT.charCodeAt();
  }

  function attempt(event) {
    if (!event.which)
      return;

    if ($(event.target).is(':input'))
      return;

    if (event.which == nextKey())
      $('.jk').focusOn('next');

    if (event.which == prevKey())
      $('.jk').focusOn('prev');

    if (event.which == selectKey())
      $('.jk').selectOn();
  }

  $(document).ready(function() {
    $(document).bind('keypress', attempt);
  });

})(jQuery);
