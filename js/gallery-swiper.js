document.addEventListener('DOMContentLoaded', function () {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev"
    },

    breakpoints: {

      1400: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      },
      350: {
        slidesPerView: 2,
        grid: {
          rows: 2,

        },
        spaceBetween: 34
      }

    },

    a11y: false

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });

  document.querySelectorAll('.gallery__slide').forEach(function (slideBtn) {
    slideBtn.addEventListener('click', function (event) {
      const slide = event.currentTarget.dataset.slide


      document.querySelector(`[data-window="${slide}"]`).classList.add('active');
      document.querySelector('.active button').classList.add('focus');
      document.querySelector('.focus').focus();
      document.querySelector('body').classList.add('modal-open');
      document.querySelector('.gallery__popup.active').classList.remove('is-closing')
    })


  })


  document.querySelectorAll('.gallery__popup-close').forEach(function (popupClose) {
    popupClose.addEventListener('click', function () {
      document.querySelector('.gallery__popup.active').classList.add('is-closing');
      document.querySelector('.gallery__popup.active').classList.remove('active');
      document.querySelector('.focus').classList.remove('focus');
      document.querySelector('body').classList.remove('modal-open')
    })
  })
  document.querySelectorAll('.gallery__popup-close-back').forEach(function (popupClose) {

    popupClose.addEventListener('click', function () {
      document.querySelector('.gallery__popup.active').classList.add('is-closing');
      document.querySelector('.focus').classList.remove('focus');
      document.querySelector('.gallery__popup.active').classList.remove('active');
      document.querySelector('body').classList.remove('modal-open')
    })
  })





})
