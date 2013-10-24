/**
* wallopSlider.js
*
* @fileoverview Simple Slider Class Handler
*
* @author Pedro Duarte
* @author http://pedroduarte.me
*/

//------------------------------------------------------------------------------------------------------------
var WallopSlider = WallopSlider || {};

WallopSlider = (function() {

  function Wallop(options) {
    this.options = {
      wSBtnPreviousClass: 'wallop-slider__btn--previous',
      wSBtnNextClass: 'wallop-slider__btn--next',
      wSItemClass: 'wallop-slider__item',
      wSCurrentItemClass: 'wallop-slider__item--current',
      wSShowPreviousClass: 'wallop-slider__item--show-previous',
      wSShowNextClass: 'wallop-slider__item--show-next',
      wSHidePreviousClass: 'wallop-slider__item--hide-previous',
      wSHideNextClass: 'wallop-slider__item--hide-next'
    };

    this.options = extend(this.options, options);

    // "Global vars"
    this.allItemsArray = Array.prototype.slice.call(document.getElementsByClassName(this.options.wSItemClass));
    this.allItemsArrayLength = this.allItemsArray.length;
    this.currentItemIndex = this.allItemsArray.indexOf(document.getElementsByClassName(this.options.wSCurrentItemClass)[0]);
    this.buttonPrevious = document.getElementsByClassName(this.options.wSBtnPreviousClass)[0];
    this.buttonNext = document.getElementsByClassName(this.options.wSBtnNextClass)[0];

    this.bindEvents();
  }

  var WallopProto = Wallop.prototype;

  // Update prev/next disabled attribute
  WallopProto.updatePagination = function () {
    if ((this.currentItemIndex + 1) === this.allItemsArrayLength) {
      this.buttonNext.setAttribute('disabled');
    } else if (this.currentItemIndex === 0) {
      this.buttonPrevious.setAttribute('disabled');
    }
  };

  // Reset all settings by removing classes and attributes added by goTo() & updatePagination()
  WallopProto.removeAllHelperSettings = function () {
    removeClass(this.allItemsArray[this.currentItemIndex], this.options.wSCurrentItemClass);
    removeClass(document.getElementsByClassName(this.options.wSHidePreviousClass)[0], this.options.wSHidePreviousClass);
    removeClass(document.getElementsByClassName(this.options.wSHideNextClass)[0], this.options.wSHideNextClass);
    removeClass(document.getElementsByClassName(this.options.wSShowPreviousClass)[0], this.options.wSShowPreviousClass);
    removeClass(document.getElementsByClassName(this.options.wSShowNextClass)[0], this.options.wSShowNextClass);
    this.buttonPrevious.removeAttribute('disabled');
    this.buttonNext.removeAttribute('disabled');
  };

  // Method to add classes to the right elements depending on the index passed
  WallopProto.goTo = function (index) {
    if (index >= this.allItemsArrayLength || index < 0) { return; }

    this.removeAllHelperSettings();

    addClass(this.allItemsArray[this.currentItemIndex], index > this.currentItemIndex ? this.options.wSHidePreviousClass : this.options.wSHideNextClass);
    addClass(this.allItemsArray[index], this.options.wSCurrentItemClass + ' ' + (index > this.currentItemIndex ? this.options.wSShowNextClass : this.options.wSShowPreviousClass));

    this.currentItemIndex = index;

    this.updatePagination();
  };

  // Callback for when previous button is clicked
  WallopProto.onPreviousButtonClicked = function () {
    this.goTo(this.currentItemIndex - 1);
  };

  // Callback for when next button is clicked
  WallopProto.onNextButtonClicked = function () {
    this.goTo(this.currentItemIndex + 1);
  };

  // Attach click handlers
  WallopProto.bindEvents = function () {
    var _this = this;
    this.buttonPrevious.addEventListener('click', function () { _this.onPreviousButtonClicked(); });
    this.buttonNext.addEventListener('click', function () { _this.onNextButtonClicked(); });
  };

  // Helper functions
  function addClass(element, className) {
    if (!element) { return; }
    element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
  }

  function removeClass(element, className) {
    if (!element) { return; }
    element.className = element.className.replace(className, '');
  }

  function extend(origOptions, userOptions){
    var extendOptions = {}, attrname;
    for (attrname in origOptions) { extendOptions[attrname] = origOptions[attrname]; }
    for (attrname in userOptions) { extendOptions[attrname] = userOptions[attrname]; }
    return extendOptions;
  }

  return Wallop;

})();