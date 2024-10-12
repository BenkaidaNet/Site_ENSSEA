$(document).ready(function() {
    const itemStudie=document.getElementById('itemDeanship');
    itemStudie.classList.remove('scale-x-0');
    itemStudie.classList.add('scale-x-100');
  
    var currentPageUrl = window.location.href;
     var urlParts = currentPageUrl.split('/');
  
  // Get the last part of the URL
    var curentPage = urlParts[urlParts.length - 2];
    // alert(curentPage);
      switch(curentPage){
        case 'formationDoctoral':
            const curentPage00=document.getElementById('formationDoctoral');
            curentPage00.classList.add("bg-blue-300");
        break
        case 'Entrepreneurship':
          const curentPage11=document.getElementById('Entrepreneurship');
          curentPage11.classList.add("bg-blue-300");
         break
         case 'ExternalRelations':
            const curentPage22=document.getElementById('ExternalRelations');
            curentPage22.classList.add("bg-blue-300");
           break
        case 'serviceStage':
           const curentPage33=document.getElementById('serviceStage');
           curentPage33.classList.add("bg-blue-300");
        break
       
       
      }
  });

 