$(document).ready(function() {
    const itemDpartmt=document.getElementById('itemScintfRsch');
    itemDpartmt.classList.remove('scale-x-0');
    itemDpartmt.classList.add('scale-x-100');
  
    var currentPageUrl = window.location.href;
     var urlParts = currentPageUrl.split('/');
  
  // Get the last part of the URL
    var curentPage = urlParts[urlParts.length - 2];
    // alert(curentPage);
      switch(curentPage){
        case 'ResearchLaboratories':
          const curentPage=document.getElementById('RsrchLb');
          curentPage.classList.add("bg-blue-300");
         break
          
        case 'ScientificBodies':
           const curentPage1=document.getElementById('ScntBod');
           curentPage1.classList.add("bg-blue-300");
        break
        case 'ScientificActivities':
          const curentPage2=document.getElementById('scntfcActvt');
          curentPage2.classList.add("bg-blue-300");
        break
       
      }
  });

 