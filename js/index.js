

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