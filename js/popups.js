document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".header__button").addEventListener('click', function() {
      document.querySelector('body').classList.add('popup-open')
        document.querySelector('.header__nav-popup').classList.add('open')
        document.querySelector('.header__button').classList.add('active')
    });
    document.querySelector('.header__close').addEventListener('click', function() {
      document.querySelector('body').classList.remove('popup-open')
        document.querySelector('.header__nav-popup').classList.remove('open')
        document.querySelector('.header__button').classList.remove('active')
    })

    document.querySelectorAll('.header__nav-link').forEach(function(popupClose) {

        popupClose.addEventListener('click', function() {
          document.querySelector('body').classList.remove('popup-open')
            document.querySelector('.header__nav-popup').classList.remove('open')
            document.querySelector('.header__button').classList.remove('active')
        })
    })
    document.querySelector('.search__btn').addEventListener('click', function() {
      document.querySelector('body').classList.add('popup-open')

        document.querySelector('.search__popup').classList.add('open')
        document.querySelector('.search__btn').classList.add('active')
        document.querySelector('.search__btn').classList.remove('animated')
    });
    document.querySelector('.popup__close').addEventListener('click', function() {
      document.querySelector('body').classList.remove('popup-open')

        document.querySelector('.search__popup').classList.remove('open')
        document.querySelector('.search__btn').classList.remove('active')
        document.querySelector('.search__btn').classList.add('animated')
    })

    document.querySelector('.search__close').addEventListener('click', function() {
      document.querySelector('body').classList.remove('popup-open')

        document.querySelector('.search__popup').classList.remove('open')
        document.querySelector('.search__btn').classList.remove('active')
    })


})
