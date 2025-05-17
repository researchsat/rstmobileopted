// Import Swiper
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

// Initialize Swiper sliders
export default function initSliders() {
  // Image Slider - Swiper
  const imageSliderEl = document.querySelector('.image-slider');
  if (imageSliderEl) {
    const imageSlider = new Swiper(imageSliderEl, {
      modules: [Autoplay],
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      loop: true,
      spaceBetween: 30,
      slidesPerView: 5,
      breakpoints: {
        // when window is <= 580px
        580: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window is <= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window is <= 992px
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window is <= 1200px
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        },
      }
    });
  }

  // Card Slider - Swiper
  const cardSliderEl = document.querySelector('.card-slider');
  if (cardSliderEl) {
    const cardSlider = new Swiper(cardSliderEl, {
      modules: [Autoplay, Navigation],
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
}

// Initialize sliders
initSliders();
