(function() {
    'use strict';

    // New instance of WallopSlider
    var slider = document.querySelectorAll('.WallopSlider');
    var wallop = new WallopSlider(slider, {carousel:true});




    // All pagination items
    var paginationItems = document.querySelectorAll('.pagination-item');

    var attachClick = function(element, index) {
      element.addEventListener('click', function (event) {
        onPaginationItemClick(event, index);
      });
    };

    var onPaginationItemClick = function(event, index) {
      wallop.goTo(index);
    };

    var updatePagination = function(index) {
      var previousPaginationItem = document.querySelector('.pagination-item--current');
      var newPaginationItem = paginationItems[index];

      removeClass(previousPaginationItem, 'pagination-item--current');
      addClass(newPaginationItem, 'pagination-item--current');
    };

    // attach click handlers
    for (var i = 0; i < paginationItems.length; i++) {
      attachClick(paginationItems[i], i);
    }

    // listen for wallop sider changes
    wallop.on('change', function(event) {
      console.log('WallopSlider changed -> parentSelector: ', event.detail.parentSelector, ' currentItemIndex: ', event.detail.currentItemIndex);
      updatePagination(event.detail.currentItemIndex);
    });

    document.addEventListener('keyup', function (event) {
      if (event.keyCode === 37) {
        wallop.previous();
      }
      if (event.keyCode === 39) {
        wallop.next();
      }
    });

    /**
     * Helper functions
     */
    function addClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
    }

    function removeClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(className, '');
    }

})();
