import Swiper, {Navigation, Pagination, Scrollbar} from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]);

let swiper = new Swiper('.swiper', {
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