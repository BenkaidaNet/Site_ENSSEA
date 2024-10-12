$(document).ready(function() {
    const itemLibrary=document.getElementById('itemLibrary');
    itemLibrary.classList.remove('scale-x-0');
    itemLibrary.classList.add('scale-x-100');
  
    var currentPageUrl = window.location.href;
     var urlParts = currentPageUrl.split('/');
  
  // Get the last part of the URL
    var curentPage = urlParts[urlParts.length - 2];
    // alert(curentPage);
      switch(curentPage){
        case 'library':
          $("#itemPrsnt").css("background-color", "gray");
          const curentPage=document.getElementById('itemPrsnt');
          curentPage.classList.add("text-white");

         break
          
        case 'stafflibrary':
          $("#itemStaff").css("background-color", "gray");
          const curentPage1=document.getElementById('itemStaff');
          curentPage1.classList.add("text-white");
        break
        case 'ScientificActivities':
          $("#itemInternalRegl").css("background-color", "gray");
          const curentPage2=document.getElementById('itemInternalRegl');
          curentPage2.classList.add("text-white");
          

        break
       
      }
  });

 