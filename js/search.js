

import fooddetails from "./fooddetails.js";
import { closeSideBar } from "./Sidebar.js";

export default function searchInputes(fooddetails) {
    $('#Search').click(function () {
        $('body').css('overflow', 'hidden');
        $('.fooddetails').html('');
        $('.foodcontainer').css('display', 'flex');
        $('body').css('overflow', 'hidden');
        $('.foodcontainer').html('').append(`
        
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
        <div class="px-2">                
        <input id="searchName" type="text" class="form-control text-white bg-black" placeholder="Search By Name">
        </div>

        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
        <div class="px-2">                
        <input id="searchLetter" maxlength="1" type="text" class="form-control text-white bg-black" placeholder="Search By First Letter">
        </div>

        </div>
        
`);
        closeSideBar();
        $('#searchName').keyup(function (e) {
            let mealName = e.target.value;
            console.log(mealName);
            if (mealName != '') {
                searchName(mealName, fooddetails);
            }
        })
        $('#searchLetter').keyup(function (e) {
            let mealLetter = e.target.value;
            console.log(mealLetter);
            if (mealLetter != '') {
                searchLetter(mealLetter,fooddetails);
            }
        })
    })

}
function searchName(name, fooddetails) {

    console.log(name);
    console.log($('.LoadingScreen'));

    $('.LoadingScreen').fadeIn(300, async function () {

        let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        console.log(x);

        let res = await x.json();
        let arr = res.meals;
        console.log(arr);
        $('body').css('overflow', 'hidden');
        if (arr != null) {
            $('.foodcontainer1').css('display', 'flex').html('');
            for (let i = 0; i < arr.length; i++) {
                $('.foodcontainer1').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
                <figure class="Food rounded rounded-4 overflow-hidden position-relative">
                    <img src=${arr[i].strMealThumb} class="w-100" alt="${arr[i].strMeal}">
                    <figcaption class="position-absolute text-black px-2 foodLayer top-0 bottom-0 start-0 end-0 bg-light bg-opacity-75">
                        <h3>${arr[i].strMeal}</h3>
                    </figcaption>
                </figure>
                </div>`)
                $('.foodLayer').eq(i).click(function () {
                    $('.foodcontainer1').html('');
                    fooddetails(arr[i].idMeal);
                })
            }



        } else {
            $('.foodcontainer1').html('');
        }
    })
    $('.LoadingScreen').fadeOut(300, function () {
        $('body').css('overflow', 'visible')
    });
}


function searchLetter(letter,fooddetails) {
    $('body').css('overflow','hidden');
    $('.LoadingScreen').fadeIn(300 , async function(){
        let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        let res = await x.json();
        let arr = res.meals;
        console.log(arr);
        $('.foodcontainer1').css('display','flex').html('');
        for(let i = 0 ; i < arr.length ; i++ ){
            $('.foodcontainer1').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
            <figure class="Food rounded rounded-4 overflow-hidden position-relative">
                <img src=${arr[i].strMealThumb} class="w-100" alt="${arr[i].strMeal}">
                <figcaption class="position-absolute text-black px-2 foodLayer top-0 bottom-0 start-0 end-0 bg-light bg-opacity-75">
                    <h3>${arr[i].strMeal}</h3>
                </figcaption>
            </figure>
            </div>`)
            $('.foodLayer').eq(i).click(function(){
                $('.foodcontainer1').html('');
                fooddetails(arr[i].idMeal)
            })
        }
    })
    $('.LoadingScreen').fadeOut(300 ,function(){
        $('body').css('overflow','visible')
    });
}