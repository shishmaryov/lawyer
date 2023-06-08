import Swiper, {Navigation, Pagination, Scrollbar} from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]);

let heroSlider = new Swiper('.hero__swiper', {
	slidesPerView: 1,
	loop: true,

	breakpoints: {
    768: {
			pagination: {
				el: '.swiper-pagination',
			},

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
    }
  }


});

const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
  document.querySelector('.services__cards').classList.add('swiper');
  document.querySelector('.services__wrapper').classList.add('swiper-wrapper');
  let s = document.querySelectorAll('.service');
  let index = 0;

  for (index = 0; index < s.length; ++index) {
    s[index].classList.add('swiper-slide');
  }

  let servicesSlider = new Swiper('.services__cards', {
  slidesPerView: 1.5,
	spaceBetween: 24,
  loop: false,

});
}
