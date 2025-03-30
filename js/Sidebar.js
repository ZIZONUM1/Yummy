let navLinkswidth;
let barswidth;
export default function Sidebar() {
    navLinkswidth=$('.sidelinks').innerWidth();
    barswidth=$('.bars').outerWidth();
    $('.sideBar').css('left',-navLinkswidth);
    $('.foodcontainer').css('margin-left',barswidth);
    $('.fooddetails').css('margin-left',barswidth);
    $('.bars').click(function(){
        if($('.sideBar').css('left')==-navLinkswidth+'px')
        {
            $('.sideBar').animate({left:'0px'},600)
            $('.navLinks1 p').eq(0).animate({top:'0%'},450)
            $('.navLinks1 p').eq(1).animate({top:'0%'},550)
            $('.navLinks1 p').eq(2).animate({top:'0%'},650)
            $('.navLinks1 p').eq(3).animate({top:'0%'},750)
            $('.navLinks1 p').eq(4).animate({top:'0%'},850);
            $('.bars').html('<i class="fa fa-close text-center fa-3x"></i>');
        }
       else if($('.sideBar').css('left')=='0px'){
        $('.navLinks1 p').animate({top:'700%'},400);
        $('.sideBar').animate({left:-navLinkswidth},600)
        $('.bars').html('<i class="fa-solid fa-bars fa-3x"></i>');
        $('.foodcontainer').css('margin-left',barswidth);   
    }
    }
    )
    
}

export  function closeSideBar() {
    $('.sideBar').animate({left:-navLinkswidth},600,function(){$('.bars').html('<i class="fa-solid fa-bars fa-3x"></i>');
        $('.foodcontainer').css('margin-left',barswidth);
    });
    $('.bars').html('<i class="fa-solid fa-bars fa-3x"></i>');
}