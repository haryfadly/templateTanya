$(window).on('load', function(){
     $('.blink_me').fadeOut(200).fadeIn(200, blink); 
});
(function blink() { 
    $('.blink_me').fadeOut(200).fadeIn(200, blink); 
  })();
