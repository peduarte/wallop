(function() {
    'use strict';

    // Set your classes here
    var wSBtnClass = 'wallop-slider__btn';
    var wSBtnPreviousClass = 'wallop-slider__btn--previous';
    var wSBtnNextClass = 'wallop-slider__btn--next';
    var wSItemClass = 'wallop-slider__item';
    var wSCurrentItemClass = 'wallop-slider__item--current';
    var wSShowPreviousClass = 'wallop-slider__item--show-previous';
    var wSShowNextClass = 'wallop-slider__item--show-next';
    var wSHidePreviousClass = 'wallop-slider__item--hide-previous';
    var wSHideNextClass = 'wallop-slider__item--hide-next';

    // Global vars
    var allItemsArray = Array.prototype.slice.call(document.getElementsByClassName(wSItemClass));
    var allItemsArrayLength = allItemsArray.length;
    var currentItemIndex = allItemsArray.indexOf(document.getElementsByClassName(wSCurrentItemClass)[0]);

    var goTo = function (index) {
      if (index >= allItemsArrayLength || index < 0) { return; }

      removeAllHelperClasses();

      addClass(allItemsArray[currentItemIndex], index > currentItemIndex ? wSHidePreviousClass : wSHideNextClass);
      addClass(allItemsArray[index], wSCurrentItemClass + ' ' + (index > currentItemIndex ? wSShowNextClass : wSShowPreviousClass));

      currentItemIndex = index;
    };

    var removeAllHelperClasses = function () {
      removeClass(allItemsArray[currentItemIndex], wSCurrentItemClass);
      removeClass(document.getElementsByClassName(wSHidePreviousClass)[0], wSHidePreviousClass);
      removeClass(document.getElementsByClassName(wSHideNextClass)[0], wSHideNextClass);
      removeClass(document.getElementsByClassName(wSShowPreviousClass)[0], wSShowPreviousClass);
      removeClass(document.getElementsByClassName(wSShowNextClass)[0], wSShowNextClass);
    };

    var onPreviousButtonClicked = function () {
      goTo(currentItemIndex - 1);
    };

    var onNextButtonClicked = function () {
      goTo(currentItemIndex + 1);
    };

    document.getElementsByClassName(wSBtnPreviousClass)[0].addEventListener('click', onPreviousButtonClicked);
    document.getElementsByClassName(wSBtnNextClass)[0].addEventListener('click', onNextButtonClicked);





    // Change Slider CSS Classes - For easings
    var wallopSliderWrapper = document.getElementsByClassName('wallop-slider')[0];
    var classAdded;
    var onRadioBtnChange = function () {
      var newClass = this.getAttribute('value');
      console.log('newClass -> ', newClass);
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
