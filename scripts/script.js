$(function() {

    // Set your classses here
    var btn = 'wallop__btn';
    var current = 'current';
    var showFromLeft = 'show--from-left';
    var showFromRight = 'show--from-right';
    var hideToLeft = 'hide--to-left';
    var hideToRight = 'hide--to-right';

    var showPrev = function ($current) {
      var $prev = $current.prev();
      if ($prev.length === 0) { return; }
      $current.removeClass(current).addClass(hideToRight);
      $prev.addClass(current + ' ' + showFromLeft);
    };

    var showNext = function ($current) {
      var $next = $current.next();
      if ($next.length === 0) { return; }
      $current.removeClass(current).addClass(hideToLeft);
      $next.addClass(current + ' ' + showFromRight);
    };

    var removeAllHelperClasses = function () {
      $('.' + hideToLeft).removeClass(hideToLeft);
      $('.' + hideToRight).removeClass(hideToRight);
      $('.' + showFromLeft).removeClass(showFromLeft);
      $('.' + showFromRight).removeClass(showFromRight);
    };

    $('.' + btn).click(function () {
      var $current = $('.' + current);

      removeAllHelperClasses();

      if ($(this).data('show') === 'prev') {
        showPrev($current);
      } else {
        showNext($current);
      }
    });

});