window.addEventListener('load', function () {
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 4,
		slidesToScroll: 4,
		draggable: true,
		dots: '.carousel__indicadores',
		responsive: [
			{
				// screens greater than >= 0px
				breakpoint: 0,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				// screens greater than >= 1350px
				breakpoint: 1350,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				// screens greater than >= 1950px
				breakpoint: 1950,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}, {
				// screens greater than >= 2670px
				breakpoint: 2670,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
		]
	});
});