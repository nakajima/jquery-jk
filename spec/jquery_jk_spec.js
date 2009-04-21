Screw.Unit(function() {
  describe("jquery-jk", function() {
    var elem;

    before(function() {
      elem = $('#test-elems');
      elem.find('li').removeClass('focus');
    });

    describe("focused element", function() {
      it("goes off class name", function() {
        elem.find('li:last').addClass('focus');
        var focused = elem.focused();
        expect(focused).to(match_selector, 'li.focus');
      });
    });

    describe("selected elements", function() {
      it("starts empty", function() {
        expect(elem.selected()).to(be_empty);
      });

      it("collects those with class name", function() {
        elem.find('li:first').addClass('selected');
        expect(elem.selected()).to(match_selector, '.selected');
      });
    });

    // These specs might want to be using the jQuery.fn.focused()
    // API instead of asserting on class names, though I'm on the
    // fence about exposing most of those methods anyway.
    describe("focusOn", function() {
      it("starts with the first", function() {
        expect(elem.focused()).to(be_empty)
        elem.focusOn('next');
        expect(elem.find('li:first')).to(match_selector, 'li:first');
      });

      it("can traverse down", function() {
        elem.find('li:first').addClass('focus');
        elem.focusOn('next');
        expect(elem.find('li:eq(1)')).to(match_selector, '.focus');
      });

      it("can traverse up", function() {
        elem.find('li:eq(1)').addClass('focus');
        elem.focusOn('prev');
        expect(elem.find('li:first')).to(match_selector, '.focus');
      });

      it("does not exceed lower boundary", function() {
        elem.find('li:first').addClass('focus');
        elem.focusOn('prev');
        expect(elem.find('li:first')).to(match_selector, '.focus');
      });

      it("triggers lower boundary event", function() {
        var called = false;
        elem.find('li:first').addClass('focus');
        elem.bind('paginate:prev', function() { called = true; })
        elem.focusOn('prev');
        expect(called).to(be_true);
      });

      it("does not exceed upper paginate boundary", function() {
        elem.find('li:last').addClass('focus');
        elem.focusOn('next');
        expect(elem.find('li:last')).to(match_selector, '.focus');
      });

      it("triggers upper boundary paginate event", function() {
        var called = false;
        elem.find('li:last').addClass('focus');
        elem.bind('paginate:next', function() { called = true; })
        elem.focusOn('next');
        expect(called).to(be_true);
      });
    });
  });
});
