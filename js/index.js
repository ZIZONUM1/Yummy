

// $('.myToggler').click(function(){
//     let Linkswidth= $('.Links').innerWidth();
//     if($('.Links').css('left')=='0px')
//     {
//         $('.Links').animate({left:-Linkswidth},1000)

//     }
//    else
//    {
//     $('.Links').animate({left:0},1000) 
//    } 
import myFood from "./main.js";
import Sidebar from "./Sidebar.js";
import searchInputes from "./search.js";
import fooddetails from "./fooddetails.js";
import getcategory from "./category.js";
import {getarea} from "./Area.js";
import getIngradiants from "./ingredients.js";
import contactUs from "./contactus.js";

// $(window).scroll(function () {


//     if ($(window).scrollTop() >250) {
//        $('.backtotop').fadeIn(1000).css('display','flex'); 
//     }else{
//         $('.backtotop').fadeIn(1000);
//     }
    
    
    
//     })
$(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
        $('.backToTop').fadeIn(1000).css('display', 'flex');
    } else {
        $('.backToTop').fadeOut(1000);
    }
});

$('.backToTop').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
});

$(document).ready(function(){
    Sidebar();
    myFood("");
    
    $('.LoadingScreen').fadeOut(1000,function () {
        $('body').css('overflow','visible')
        
    })
})

searchInputes(fooddetails);
getcategory();
getarea();
getIngradiants();
contactUs();