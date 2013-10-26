# WallopSlider

### Another fucking slider, I know... but this one's different.

### Benefits
- Mobile First
- Progressive Enhancement
- Transitions are all in CSS
- Minimal Javascript
- Flexible
- Scalable
- You have control

### Usage
First download the following files:

- [wallop-slider.css](https://github.com/peduarte/wallop-slider/blob/master/css/wallop-slider.css) ([.scss version also available](https://github.com/peduarte/wallop-slider/blob/master/css/wallop-slider.scss))
- [WallopSlider.js](https://github.com/peduarte/wallop-slider/blob/master/scripts/wallopSlider.js)

Basic HTML setup

	<head>
		<!-- Include CSS -->
		<link rel="stylesheet" href="path-to-wallop-slider.css">
	</head>
	<body>
		<div class="wallop-slider">
		  <ul class="wallop-slider__list">
			<li class="wallop-slider__item wallop-slider__item--current"><img src="http://distilleryimage9.ak.instagram.com/6113581809eb11e39e3522000a9f18ab_7.jpg"></li>
		    <li class="wallop-slider__item"><img src="http://distilleryimage4.ak.instagram.com/e27029bc1d4211e3852e22000ae90903_7.jpg"></li>
		    <li class="wallop-slider__item"><img src="http://distilleryimage3.ak.instagram.com/67345d703be411e3b3da22000aa804fa_8.jpg"></li>
		  </ul>
		  <button class="wallop-slider__btn wallop-slider__btn--previous" disabled>Previous</button>
		  <button class="wallop-slider__btn wallop-slider__btn--next">Next</button>
		</div>
      
      
		<!-- Include Javascript -->
		<script src="path-to-wallopSlider.js"></script>
		<script>
		  // Create new isntance of WallopSlider
		  var slider = new WallopSlider('.wallop-slider');
		</script>
	</body>
      	

### Online Demo
I built a more detailed page about how this works, feel free to go [check it out](http://pedroduarte.me/wallop-slider)