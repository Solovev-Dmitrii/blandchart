document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

  });

  function getWindowWidth () {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  const MOBILE_WIDTH = 800;

  function deleteAttribute() {
    document.querySelectorAll('.accordion__link').forEach(function (link) {
      link.removeAttribute('href', '#catalog__bottom')
  } )
}

function addAttribute() {
  document.querySelectorAll('.accordion__link').forEach(function (link) {
    link.setAttribute('href', '#catalog__bottom')
} )
}


function checkWindowWidth () {
  const currentWidth = getWindowWidth();
  if (
    currentWidth > MOBILE_WIDTH
  ) {deleteAttribute();}
  else {addAttribute(); }
}

checkWindowWidth();

window.addEventListener("resize", function () {
  checkWindowWidth();
});







  // window.addEventListener("resize", function () {
  //   checkWindowWidth();
  // });


})
