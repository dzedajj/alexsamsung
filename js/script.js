$(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
      $('.nav_bg').addClass('dark');
    } else {
        $('.nav_bg').removeClass('transparent');
      }
    if($(document).scrollTop() < 200){
        $('.nav_bg').removeClass('dark');
    } 

    if ($(window).width() < 500) {
        if ($(document).scrollTop() > 50) {
            $('.nav_bg').addClass('dark');
          } else {
              $('.nav_bg').removeClass('transparent');
            }
          if($(document).scrollTop() < 50){
              $('.nav_bg').removeClass('dark');
          } 
    }
});