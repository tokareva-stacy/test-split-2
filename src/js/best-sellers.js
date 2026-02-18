import Swiper from 'swiper';
import 'swiper/css';
import { Scrollbar } from 'swiper/modules';

const swiper = new Swiper('.best-sellers__slider', {
  modules: [Scrollbar],

  slidesPerView: 'auto',   // единственный режим!
  spaceBetween: 12,
  grabCursor: true,

  scrollbar: {
    el: '.best-sellers .swiper-scrollbar',
    draggable: true
  },

  breakpoints: {
    768: {
      spaceBetween: 16,   // меняем только gap!
    },
    1440: {
      spaceBetween: 24,
    }
  }
});
