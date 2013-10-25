(function() {
    'use strict';

    // New isntance of WallopSlider
    var photoSlider = new WallopSlider('.photo-slider');

    // Change Slider CSS Classes - For easings
    var wallopSliderWrapper = document.getElementsByClassName('wallop-slider')[0];
    var classAdded;
    var onRadioBtnChange = function () {
      var newClass = this.getAttribute('value');
      removeClass(wallopSliderWrapper, classAdded);
      addClass(wallopSliderWrapper, newClass);
      classAdded = newClass;
    };

    var radioBtns = document.querySelectorAll('input[type=radio]');
    for (var i = 0; i < radioBtns.length; i++) {
      radioBtns[i].addEventListener('change', onRadioBtnChange);
    }

    // Helper functions
    function addClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
    }

    function removeClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(className, '');
    }

})();
