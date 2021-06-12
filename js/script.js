// Dok se scrolluje kroz window (DOM element)
$(window).scroll(function () {
  // Navbar background boja da se pojavljuje
  if ($(document).scrollTop() > 100) {
    $('.nav_bg').addClass('dark');
  } else {
    $('.nav_bg').removeClass('dark');
  }

  // Dugme to the top da se pojavi
  if ($(document).scrollTop() < 400) {
    $('.toTheTop').css('display', 'none');
  } else {
    $('.toTheTop').css('display', 'block');
  }
});

// Da kad se klikne hamburger dobije pozadinu ljubicastu
if ($(document).scrollTop() == 0) {
  $('.navbar-toggler').click(function () {
    $('.nav_bg').css('background', '#1e0353');
  });
}
