let arr;
import fooddetails from './fooddetails.js';
export default async function myFood(str = "") {
    
let x= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`);

let res=await x.json();
 arr=res.meals; 
 console.log(arr);
 
for (let i = 0; i < arr.length; i++) 
    
{
$('.foodcontainer').append(`
    <div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
            <figure class="Food rounded rounded-4 overflow-hidden position-relative">
                <img class="w-100" src="${arr[i].strMealThumb} " alt="${arr[i].strMeal}">
                <figcaption class="d-flex align-items-center justify-content-center position-absolute text-black px-2 foodLayer top-0 bottom-0 start-0 end-0 bg-light bg-opacity-75">
                    <h3>${arr[i].strMeal}</h3>
                </figcaption>
            </figure>
       
        </div>
    
    
    `)

   $('.foodLayer').eq(i).click(function(){
       fooddetails(arr[i].idMeal);
   }) 
}

}


// export default async function myFood(str) {
   
//     return new Promise(function () {
//         var req = new XMLHttpRequest();
//         req.open('get', `https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`)
//         req.send();
//         req.addEventListener('loadend', function () {
//             if (req.status == 200) {
//                 var x = JSON.parse(req.response);
//                 var arr = x.meals;
//                 console.log(arr);
                
// let cartona="";
//             for (let i = 0; i <  arr.length; i++) {
//                cartona+=
//                `
//                 <div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
// //             <figure class="Food rounded rounded-4 overflow-hidden position-relative">
// //                 <img class="w-100" src="${arr[i].strMealThumb} " alt="${arr[i].strMeal}">
// //                 <figcaption class="d-flex align-items-center justify-content-center position-absolute text-black px-2 foodLayer top-0 bottom-0 start-0 end-0 bg-light bg-opacity-75">
// //                     <h3>${arr[i].strMeal}</h3>
// //                 </figcaption>
// //             </figure>
       
// //         </div>
    
    
//                `

//             }
//             document.querySelector('.foodcontainer').innerHTML=cartona;
//             }
//         }
//     )
// }
// )
// }