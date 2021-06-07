$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $('.nav_bg').addClass('dark');
  } else {
    $('.nav_bg').removeClass('transparent');
  }
  if ($(document).scrollTop() < 100) {
    $('.nav_bg').removeClass('dark');
  }

  if ($(window).width() < 500) {
    if ($(document).scrollTop() > 100) {
      $('.nav_bg').addClass('dark');
    } else {
      $('.nav_bg').removeClass('transparent');
    }
    if ($(document).scrollTop() < 100) {
      $('.nav_bg').removeClass('dark');
    }
  }

  if ($(document).scrollTop() < 400) {
    $('.toTheTop').css('display', 'none');
  } else {
    $('.toTheTop').css('display', 'block');
  }

  if ($(window).width() < 990 && $(document).scrollTop() === 0) {
    const dugme = document.querySelector;

    const poz = document.querySelector('.nav_bg');

    $('.navbar-toggler').addEventListener('click', () => {
      $('.nav_bg').css('background', '#1e0353');
    });
  }
});
