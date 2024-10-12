$(document).ready(function() {
    const itemStudie=document.getElementById('itemStudies');
    itemStudie.classList.remove('scale-x-0');
    itemStudie.classList.add('scale-x-100');
  
    var currentPageUrl = window.location.href;
     var urlParts = currentPageUrl.split('/');
  
  // Get the last part of the URL
    var curentPage = urlParts[urlParts.length - 2];
    // alert(curentPage);
      switch(curentPage){
        case 'studiesAndScholling':
          const curentPage=document.getElementById('studiesAndScholling');
          curentPage.classList.add("bg-blue-300");
         break
          
        case 'OffersAndFormation':
           const curentPage1=document.getElementById('OffersFormation');
           curentPage1.classList.add("bg-blue-300");
        break
       
       
      }
  });

 