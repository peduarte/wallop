'use restrict';

var Wallop = require('./js/Wallop');
var test = require('tape');

function createSlider(className, itemsTotal) {
  var $wallop = document.createElement('div');
  $wallop.classList.add(className);
  document.body.appendChild($wallop);

  for (var i = 0; i < itemsTotal; i++) {
    var $item = document.createElement('div');
    $item.classList.add('Wallop-item');
    $wallop.appendChild($item);
  }

}

test('First item is currentItem if not specified in HTML', function(assert) {
  createSlider('Wallop1', 2);

  var slider = document.querySelector('.Wallop1');
  var wallop = new Wallop(slider);

  assert.equal(wallop.currentItemIndex, 0, 'correct');
  assert.end();
});

test('Clicking Next updates currentItemIndex', function(assert) {
  createSlider('Wallop2', 3);

  var slider = document.querySelector('.Wallop2');
  var wallop = new Wallop(slider);
  var index = wallop.currentItemIndex;

  wallop.next();

  index = wallop.currentItemIndex;

  assert.equal(index, 1, 'updated index');
  assert.end();
});

test('Carousel is working', function(assert) {
  createSlider('Wallop3', 3);

  var slider = document.querySelector('.Wallop3');
  var wallop = new Wallop(slider);
  var index = wallop.currentItemIndex;

  wallop.previous();

  index = wallop.currentItemIndex;

  assert.equal(index, 2, 'carousel works');
  assert.end();
});

test('Go to specific item index', function(assert) {
  createSlider('Wallop4', 3);

  var slider = document.querySelector('.Wallop4');
  var wallop = new Wallop(slider);
  var index = wallop.currentItemIndex;

  wallop.goTo(1);

  index = wallop.currentItemIndex;

  assert.equal(index, 1, 'goTo works');
  assert.end();
});
