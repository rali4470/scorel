
$(window).scroll(function(){
    var scroll_top=$(this).scrollTop();

    if (scroll_top>300){
        $("#to_top").animate({right:"10px"},50);
    }
    else{
        $("#to_top").animate({right:"-100px"},50);
    }
});


$(document).ready(function(){
    $("#to_top").click(function(){
        $("html").animate({scrollTop:0},1000);
    });


});

jQuery(function($) {


var lastScrollTop = 20;
$(window).scroll(function(event){
   var st = $(this).scrollTop();



   if (st < 20){
       // downscroll code
       $('.header-inner').removeClass('sticky');

   } else if (st > lastScrollTop){
      // upscroll code
       $('.header-inner').addClass('sticky');
   }
   else {
      // upscroll code
       $('.header-inner').removeClass('sticky');
   }
   lastScrollTop(0) = st;
});


});
