$(function() {

    // Set your classses here
    var list = 'wallop-slider__list';
    var item = 'wallop-slider__item';
    var btn = 'wallop__btn';
    var current = 'current';
    var showFromLeft = 'show--from-left';
    var showFromRight = 'show--from-right';
    var hideToLeft = 'hide--to-left';
    var hideToRight = 'hide--to-right';

    var goTo = function ($current, currentIndex, direction) {
        var goToElement = $('.' + item).eq(currentIndex);
        if (goToElement.length === 0 || currentIndex < 0) { return; }
        var hideDirectionClass = direction === 'left' ? hideToRight : hideToLeft;
        var showDirectionClass = direction === 'left' ? showFromLeft : showFromRight;
        $current.removeClass(current).addClass(hideDirectionClass);
        goToElement.addClass(current + ' ' + showDirectionClass);
    };

    var removeAllHelperClasses = function () {
      $('.' + hideToLeft).removeClass(hideToLeft);
      $('.' + hideToRight).removeClass(hideToRight);
      $('.' + showFromLeft).removeClass(showFromLeft);
      $('.' + showFromRight).removeClass(showFromRight);
    };

    $('.' + btn).click(function () {
      var $current = $('.' + current);
      var currentIndex = $current.index();

      removeAllHelperClasses();

      if ($(this).data('show') === 'prev') {
        goTo($current, currentIndex - 1, 'left');
      } else {
        goTo($current, currentIndex + 1, 'right');
      }
    });

});