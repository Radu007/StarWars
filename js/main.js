$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		navClass: ['slider__nav--left', 'slider__nav--right'],
		margin: 20,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			900: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})
});