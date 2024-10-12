function DetectLanguage(){
    var selectElement = document.getElementById('selectlist');

    var selectedIndex = selectElement.selectedIndex;

    var selectedOption = selectElement.options[selectedIndex];

    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;

    return (selectedValue);
    
}

var currentPageUrl = window.location.href;
var urlParts = currentPageUrl.split('/');
var curentPage = urlParts[urlParts.length - 2];
if (DetectLanguage()=='ar'){ 
    var sidNavLib=document.getElementById('sidNavLib');
    sidNavLib.style.direction='rtl';
switch(curentPage){
  


    case 'library':

    var pragraphLibrry1=document.getElementById('pragraphLibrry1');
    var pragraphLibrry=document.getElementById('pragraphLibrry');
    var tableLibrry=document.getElementById('tableLibrry');
    pragraphLibrry1.style.direction='rtl';
    tableLibrry.style.direction='rtl';
    pragraphLibrry.style.direction='rtl';
    break
    // --------------------------------------------------------------
    case 'stafflibrary':
    var paragraph11=document.getElementById('paragraph1');
    var ulServices=document.getElementById('ulServices');
    var ulRcpOrtionSrvc=document.getElementById('ulRcpOrtionSrvc');
    var ulBiblioGrphSrchServc=document.getElementById('ulBiblioGrphSrchServc');
    var ulAquisProcessServc=document.getElementById('ulAquisProcessServc');
    var directrLibrry=document.getElementById('directrLibrry');
    var emailLibrry=document.getElementById('emailLibrry');
    var phonelibrry=document.getElementById('phonelibrry');
    paragraph11.style.direction='rtl';
    ulServices.style.direction='rtl';
    ulRcpOrtionSrvc.style.direction='rtl';
    ulBiblioGrphSrchServc.style.direction='rtl';
    ulAquisProcessServc.style.direction='rtl';
    directrLibrry.style.direction='rtl';
    emailLibrry.style.direction='rtl';
    phonelibrry.style.direction='rtl';
    break
}
        
}

