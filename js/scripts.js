// MOBILE NAV TOGGLE
$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active')
  })
});

// DATEDROPPER
$('#date').dateDropper();
