document.addEventListener('DOMContentLoaded', function() {


    document.querySelectorAll('[class*=catalog__link]').forEach(function(tabsBtn) {

        tabsBtn.addEventListener('click', function(event) {

            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.catalog__content').forEach(function(tabContent) {
                tabContent.classList.remove('catalog__content-is-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content-is-active')
        })
        tabsBtn.addEventListener('click', function(step) {

            const start = step.currentTarget.dataset.start

            document.querySelectorAll('.catalog__nav-item').forEach(function(tabContent) {
                tabContent.classList.remove('catalog__nav-item-active')
            })
            document.querySelector(`[data-end="${start}"]`).classList.add('catalog__nav-item-active')
        })



    })

    document.querySelectorAll('.accordion__link').forEach(function(accordionLink) {

        accordionLink.addEventListener('click', function(event) {

            const painter = event.currentTarget.dataset.painter

            document.querySelectorAll('.painter').forEach(function(tabContent) {
                tabContent.classList.remove('painter-is-active')
            })
            document.querySelector(`[data-painter-face="${painter}"]`).classList.add('painter-is-active')
        })
        accordionLink.addEventListener('click', function(link) {

            const used = link.currentTarget.dataset.used

            document.querySelectorAll('.accordion__link').forEach(function(tabContent) {
                tabContent.classList.remove('accordion__link-is-active')
            })
            document.querySelector(`[data-use="${used}"]`).classList.add('accordion__link-is-active')
        })



    })
})
