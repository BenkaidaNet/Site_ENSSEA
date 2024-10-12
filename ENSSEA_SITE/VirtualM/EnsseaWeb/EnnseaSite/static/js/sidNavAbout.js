$(document).ready(function() {
    const itemLibrary=document.getElementById('itemAbout');
    itemLibrary.classList.remove('scale-x-0');
    itemLibrary.classList.add('scale-x-100');
  
    var currentPageUrl = window.location.href;
     var urlParts = currentPageUrl.split('/');
  
  // Get the last part of the URL
    var curentPage = urlParts[urlParts.length - 2];
    // alert(curentPage);
      switch(curentPage){
        case 'history':
          const curentPage=document.getElementById('idHistory');
          curentPage.classList.add("bg-blue-300");
         break
          
        case 'infrastructure':
           const curentPage1=document.getElementById('idInfra');
           curentPage1.classList.add("bg-blue-300");
        break
        case 'organizationalChart':
          const curentPage2=document.getElementById('idOrganis');
          curentPage2.classList.add("bg-blue-300");
        break
       
      }
  });

 