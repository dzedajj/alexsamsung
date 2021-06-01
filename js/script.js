$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('.nav_bg').addClass('dark');
    } else {
        $('.nav_bg').removeClass('transparent');
      }
    if($(document).scrollTop() < 100){
        $('.nav_bg').removeClass('dark');
    } 

    if ($(window).width() < 500) {
        if ($(document).scrollTop() > 100) {
            $('.nav_bg').addClass('dark');
          } else {
              $('.nav_bg').removeClass('transparent');
            }
          if($(document).scrollTop() < 100){
              $('.nav_bg').removeClass('dark');
          } 
    }
});