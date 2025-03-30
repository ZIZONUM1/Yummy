
    $(window).scroll(function () {


        if ($(window).scrollTop() >250) {
           $('.backtotop').fadeIn(1000).css('display','flex'); 
        }else{
            $('.backtotop').fadeIn(1000).css('display','none');
        }
        
        
        
        })
