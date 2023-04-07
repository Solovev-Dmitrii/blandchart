document.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('#swiper', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    loop: true,


  });



  const swiper2 = new Swiper('#swiper2', {


    loop: true,





    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,


    breakpoints: {


      1400: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      960: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      600: {

        slidesPerView: 2,
        spaceBetween: 34
      },

    },

  })
})



