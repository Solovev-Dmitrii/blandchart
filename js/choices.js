document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".choices")


    const choices = new Choices(document.querySelector(".choices"), {
        searchEnabled: false,
        itemSelectText: '',
        classNames: {
            containerOuter: 'choices choices1',
        },
    });

});
