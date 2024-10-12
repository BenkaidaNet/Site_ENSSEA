document.addEventListener("DOMContentLoaded", function() {
    
     var myDiv = document.getElementById("header");
     if (myDiv) {
       const home=document.getElementById('itemHome');
       home.classList.remove('scale-x-0');
      home.classList.add('scale-x-100');     // Your additional code here
      const about=document.getAnimations('itemAbout');
      about.classList.remove('scale-x-0');
      about.classList.add('scale-x-100');
 
     } 

    

   });


// $(document).ready(function() {
//  var urlhomePage='http://127.0.0.1:8000/';
//  var currentPageUrl = window.location.href;

//  if(currentPageUrl==urlhomePage){
  
//  }
//    var urlParts = currentPageUrl.split('/');
//    var curentPage = urlParts[urlParts.length - 2];

 
//  var curentPage = urlParts[urlParts.length - 2];
 //alert(currentPageUrl);
//    switch(curentPage){
//     case '':
//         const tst=document.getElementById('itemHome');
//         tst.classList.remove('scale-x-0');
//         tst.classList.add('scale-x-100');
//       break
//      case 'history':
//         const tst1=document.getElementById('itemHome');
//         tst1.classList.remove('scale-x-0');
//         tst1.classList.add('scale-x-100');
//       break
       

//    }
//});

