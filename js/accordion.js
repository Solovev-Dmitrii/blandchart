document.addEventListener('DOMContentLoaded', function() {

    $(function() {
        $(".accordion").accordion({
            active: false,
            collapsible: true,
            heightStyle: "content"
        });
    })
    $(function() {
        $("#accordionPainterList").accordion({
            active: 0,

        });
    })



})
