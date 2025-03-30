import { closeSideBar } from "./Sidebar.js";

export default function contactUs(){
    $('#Contact').click(function(){
        $('.foodcontainer').css('display','flex');
        $('body').css('overflow','hidden');
        // $('.foodcontainer').css('display','none').html('');
        $('.foodcontainer1').css('display','none');
        $('.LoadingScreen').fadeIn(300 , function(){
            $('.foodcontainer').html(`
          <div class="m-auto d-flex flex-wrap">
           <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myName" type="text" class="form-control myInputs text-white bg-black" placeholder="Enter Your Name">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterName"></div>
            </div>
    
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id='myEmail' type="email" class="form-control myInputs text-white bg-black" placeholder="Enter Your Email">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterEmail"></div>
            </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myPhone" type="text" class="form-control myInputs text-white bg-black" placeholder="Enter Your Phone">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterPhone"></div>
            </div>
            </div>
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myAge" type="number" class="form-control myInputs text-white bg-black" placeholder="Enter Your Age">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterAge"></div>
            </div>
            </div>
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myPassword" type="password" class="form-control myInputs text-white bg-black" placeholder="Enter Your Password">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterPassword"></div>
            </div>
            </div>
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myRepassword" type="password" class="form-control myInputs text-white bg-black" placeholder="RePassword">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterRepassword"></div>
            </div>
            </div>
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2 text-center ">                
            <button id="MyBtn" class="myBtn px-3  rounded rounded-3 py-2">submit</button>
            </div>
            </div></div>
           `)
        })
        $('.LoadingScreen').fadeOut(300,function(){
            $('body').css('overflow','visible');
        });

        closeSideBar();
    })
}