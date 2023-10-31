import Swiper from "swiper";
import { Navigation, EffectCreative } from 'swiper/modules';

window.addEventListener('DOMContentLoaded', () => {
	const introCarousel = new Swiper('.intro__carousel', {
		modules: [Navigation, EffectCreative],
		effect: 'creative',
		slidesPerView: 'auto',
		speed: 600,
		creativeEffect: {
			prev: {
				shadow: false,
				opacity: '0',
				translate: ['-200%', '-300%', -320],
			},
			next: {
				shadow: false,
				opacity: '1',
				translate: ['50%', '40%', -320],
			},
		},
		navigation: {
			nextEl: '.carousel__btn.--next',
			prevEl: '.carousel__btn.--prev',
		},
	});

	const weeklyCarousel = new Swiper('.weekly__carousel', {
		modules: [Navigation],
		slidesPerView: 'auto',
		speed: 600,
		navigation: {
			nextEl: '.carousel__btn.--next',
			prevEl: '.carousel__btn.--prev',
		},
	})
});
