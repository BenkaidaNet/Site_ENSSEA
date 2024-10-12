$(document).ready(function() {
  const itemDpartmt=document.getElementById('itemDepartmt');
  itemDpartmt.classList.remove('scale-x-0');
  itemDpartmt.classList.add('scale-x-100');

  var currentPageUrl = window.location.href;
   var urlParts = currentPageUrl.split('/');

// Get the last part of the URL
  var curentPage = urlParts[urlParts.length - 2];
    switch(curentPage){
      case 'preparatory':

        const curentPage=document.getElementById('prepa');
        curentPage.classList.add("bg-blue-300");
       break
        
      case 'commonTeaching':
         const curentPage1=document.getElementById('commonTch');
         curentPage1.classList.add("bg-blue-300");
      break
      case 'AppliedStatistics':
        const curentPage2=document.getElementById('stat');
        curentPage2.classList.add("bg-blue-300");
      break
      case 'finance':
        const curentPage3=document.getElementById('finance');
        curentPage3.classList.add("bg-blue-300");
      break
      case 'prospectiveEconomic':
        const curentPage4=document.getElementById('economi');
        curentPage4.classList.add("bg-blue-300");
      break    

    }
});