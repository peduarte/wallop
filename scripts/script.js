(function() {
    'use strict';

    // New isntance of WallopSlider
    var photoSlider = new WallopSlider('.photo-slider');

    // Listen to custom event - fired when goTo is ended
    document.addEventListener('goToEnded', function(event) {

      var OneBeforeCurrentIndex = event.detail.currentItemIndex - 1;
      var TwoBeforeCurrentIndex = OneBeforeCurrentIndex - 1;
      var listItems = event.srcElement.children[0].children;

      removeClass(document.querySelector('.wallop-slider__item--before-current'), 'wallop-slider__item--before-current');
      removeClass(document.querySelector('.wallop-slider__item--before-before'), 'wallop-slider__item--before-before');
      addClass(listItems[OneBeforeCurrentIndex], 'wallop-slider__item--before-current');
      addClass(listItems[TwoBeforeCurrentIndex], 'wallop-slider__item--before-before');

    }, false);

    function addClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
    }

    function removeClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(className, '');
    }


})();
