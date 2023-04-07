window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.checkboxer__tittle').addEventListener('click', function() {
        document.querySelectorAll('.checkboxer__dropdown').forEach(function(tabContent) {
            tabContent.classList.remove('selected')
        })
        document.querySelector('.checkboxer__dropdown').classList.toggle('open')
    })
    document.querySelectorAll('.checkboxer__text').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {

            const check = event.currentTarget.dataset.check

            document.querySelectorAll('.checkboxer__text').forEach(function(tabContent) {
                tabContent.classList.remove('checked')
            })

            document.querySelectorAll('.checkboxer__dropdown').forEach(function(tabContent) {
                tabContent.classList.remove('open')
            })
            document.querySelector(`[data-checked="${check}"]`).classList.add('checked')
            document.querySelector('.checkboxer__dropdown').classList.add('selected')

            const checkItem = event.currentTarget.dataset.checkItem
            document.querySelectorAll('.checkboxer__item').forEach(function(tabContent) {
                tabContent.classList.remove('checked-item')
            })
            document.querySelector(`[data-checked-item="${checkItem}"]`).classList.add('checked-item')

        })

    })
})