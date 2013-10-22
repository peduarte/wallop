(function() {
    'use strict';

    // Set your classses here
    var btn = 'wallop-slider__btn';
    var current = 'wallop-slider__item--current';
    var showFromLeft = 'wallop-slider__item--show-from-left';
    var showFromRight = 'wallop-slider__item--show-from-right';
    var hideToLeft = 'wallop-slider__item--hide-to-left';
    var hideToRight = 'wallop-slider__item--hide-to-right';

    var hasClass = function(elem, className) {
        if (!elem) { return; }
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    };

    var addClass = function(elem, className) {
        if (!elem) { return; }
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    };

    var removeClass = function(elem, className) {
        if (!elem) { return; }
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    };

    var goTo = function ($current, direction) {
        var goToElement = direction === 'left' ? $current.previousSibling.previousSibling : $current.nextSibling.nextSibling;
        if (!goToElement) { return; }
        var hideDirectionClass = direction === 'left' ? hideToRight : hideToLeft;
        var showDirectionClass = direction === 'left' ? showFromLeft : showFromRight;
        removeClass($current, current);
        addClass($current, hideDirectionClass);
        addClass(goToElement, current + ' ' + showDirectionClass);
    };

    var removeAllHelperClasses = function () {
      removeClass(document.getElementsByClassName(hideToLeft)[0], hideToLeft);
      removeClass(document.getElementsByClassName(hideToRight)[0], hideToRight);
      removeClass(document.getElementsByClassName(showFromLeft)[0], showFromLeft);
      removeClass(document.getElementsByClassName(showFromRight)[0], showFromRight);
    };

    var onBtnClick = function () {
      var $current = document.getElementsByClassName(current)[0];

      removeAllHelperClasses();

      if (this.getAttribute('data-show') === 'prev') {
        goTo($current, 'left');
      } else {
        goTo($current, 'right');
      }
    };

    var $buttons = document.getElementsByClassName(btn);
    for (var i = 0; i < $buttons.length; i++) {
        $buttons[i].addEventListener('click', onBtnClick);
    }

})();