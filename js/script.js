$(document).ready(function () {
  var swiper = new Swiper(".swiper_block01", {
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    loopAdditionalSlides: 1,
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
        centeredSlides: false,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
      1024: {
        slidesPerView: 2.8,
        spaceBetween: 20,
        centeredSlides: false,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
      1400: {
        slidesPerView: 3.2,
        spaceBetween: 20,
        centeredSlides: false,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
    },
  });
});
