# WallopSlider

*See [the website](http://pedroduarte.me/wallop-slider) for for more detailed demos and usage.*

## Getting Started

Clone this repository or install with Bower.

```
bower install wallop-slider --save
```

Include the script and stylesheet on your page and initialize it.

```
<head>
<link rel=stylesheet href=path/to/WallopSlider.css>
</head>
<body>
<script src=path/to/WallopSlider.js></script>
<script>var slider = new WallopSlider('.wallop-slider');</script>
</body>
```

## Options

| Option              | Default                              | Type    |
|---------------------|--------------------------------------|:-------:|
| wSBtnPreviousClass  | 'wallop-slider__btn--previous'       | string  |
| wSBtnNextClass      | 'wallop-slider__btn--next'           | string  |
| wSItemClass         | 'wallop-slider__item'                | string  |
| wSCurrentItemClass  | 'wallop-slider__item--current'       | string  |
| wSShowPreviousClass | 'wallop-slider__item--show-previous' | string  |
| wSShowNextClass     | 'wallop-slider__item--show-next'     | string  |
| wSHidePreviousClass | 'wallop-slider__item--hide-previous' | string  |
| wSHideNextClass     | 'wallop-slider__item--hide-next'     | string  |
| wSCarousel          | false                                | boolean |

Usage: 

```
var slider = new WallopSlider('.wallop-slider',options);
```

## API

WallopSlider offers a basic API for you to use, so you can control it from your own buttons or gestures. 

Let's say you want to go to the second slide when you click on your button.

```
document.querySelector('.button').addEventListener('click', function () {
  slider.goTo(2);
});

```

If you're using jQuery, you can do the same thing like this:

```
$('.button').click(function () {
  slider.goTo(2);
});
```

## Author and license

WallopSlide has been built by Pedro Duarte.

WallopSlide is free software released under the MIT licence.

See the `COPYING.MIT` file or <http://opensource.org/licenses/MIT>
for more details.
