# Wallop

Wallop is a minimal 4kb zero dependency slider.

> **Important note**<br>
> Version 1 of Wallop is not compatible with version 2+.<br>
> If you are still v1, please note that I am no longer supporting it. Documentation, etc has been moved to [this branch](https://github.com/Wallop/Wallop.js/tree/v1).


## Benefits
- Mobile first
- Progressive enhancement
- Transitions/Animations are all in CSS
- Minimal JavaScript
- Flexible & Scalable
- Custom events and API available
- 4KB minified
- Dependency free


## Install
With npm

```
npm install wallop
```

With bower

```
npm install wallop
```

With git

```
git clone git@github.com:Wallop/Wallop.js.git
```



## Usage
Once you have downloaded Wallop, the first thing you need to do is include the CSS and the JavaScript.

### CSS
```html
<head>
  <link rel="stylesheet" href="path/to/wallop.css">
</head>
```

### JavaScript
```html
<script src="path/to/Wallop.min.js"></script>
<script>
  var slider = document.querySelector('.Wallop');
  new Wallop(slider);
</script>
```

### HTML
```html
<div class="Wallop">
  <ul class="Wallop-list">
    <li class="Wallop-item"><img src="imgs/1.jpg"></li>
    <li class="Wallop-item"><img src="imgs/2.jpg"></li>
    <li class="Wallop-item"><img src="imgs/3.jpg"></li>
    <li class="Wallop-item"><img src="imgs/4.jpg"></li>
    <li class="Wallop-item"><img src="imgs/5.jpg"></li>
  </ul>
  <button class="Wallop-buttonPrevious">Previous</button>
  <button class="Wallop-buttonNext">Next</button>
</div>
</div>
```

>**#protip**<br>
>You can set the starting slide with a `.Wallop-item--current` class.

## Adding animations
Wallop has no animations by default, so if you want to animate the slides, you need to extend the default `.Wallop` class with an animation modifier and include the respective CSS into your HTML.<br>

I have created a few basic animations which is ready for you to use out-of-the-box, you will find them in the `/css` directory.

### Including animation CSS
```html
<head>
  <link rel="stylesheet" href="path/to/wallop.css">
  <link rel="stylesheet" href="path/to/wallop-animation.css">
</head>
```

### Extending with modifier
```html
<div class="Wallop Wallop--slide">
...
</div>
```

### Available animations
Here's a list of the available animation modifiers ready for you to use
- `Wallop--slide`
- `Wallop--fade`
- `Wallop--scale`
- `Wallop--rotate`
- `Wallop--fold`
- `Wallop--vertical-slide`

## Options
Here's a list of options you can pass to Wallop
- `buttonPreviousClass: 'Wallop-buttonPrevious'`
- `buttonNextClass: 'Wallop-buttonNext'`
- `itemClass: 'Wallop-item'`
- `currentItemClass: 'Wallop-item--current'`
- `showPreviousClass: 'Wallop-item--show-previous'`
- `showNextClass: 'Wallop-item--show-next'`
- `hidePreviousClass: 'Wallop-item--hide-previous'`
- `hideNextClass: 'Wallop-item--hide-next'`
- `carousel: true`

## API
Wallop offers a basic API for you to use, so you can control it from your own buttons or gestures.

### goTo
This allows you to go to a specific slide index
```js
var slider = document.querySelector('.Wallop');
var Wallop = new Wallop(slider);

// Go to 2nd slide
Wallop.goTo(2);
```

### next
This allows you to go to the next slide
```js
var slider = document.querySelector('.Wallop');
var Wallop = new Wallop(slider);

// Go to next slide
Wallop.next();
```

### previous
This allows you to go to the previous slide
```js
var slider = document.querySelector('.Wallop');
var Wallop = new Wallop(slider);

// Go to previous slide
Wallop.previous();
```

## Events
Wallop dispatches a Custom Event everytime a slide changes, and it returns a `detail` object which contains the current slide index and the element you initiated Wallop with.

### Listening to a slide change
```js
var slider = document.querySelector('.Wallop');
var Wallop = new Wallop(slider);

Wallop.on('change', function(event) {
  // event.detail.wallopEl
  // => <div class="Wallop">…</div>

  // event.detail.currentItemIndex
  // => number
});
```

## Limitiations
Wallop is a very simple library which basically just adds the right classes in the right places at the right time. Those classes allows you to use CSS to create animations.

Due to its simplicity, Wallop has a few limitations. For example, it is not possible to have the slide position animation based on gesture, or it's not possible to include physics based animations based on gesture momentum.

If you want a slider which provides all these options, I highly recommend David Desandro's [Flickity](http://flickity.metafizzy.co/).

## Contributing
Plese see [CONTRIBUTING](#).

## Licensing
MIT © 2015 [Pedro Duarte](http://pedroduarte.me)
