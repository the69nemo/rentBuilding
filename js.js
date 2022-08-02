const slider = new Swiper('.bulding-slider', {
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 20,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  loop: true,
});
