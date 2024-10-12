function DetectLanguage(){
    var selectElement = document.getElementById('selectlist');
    var selectedIndex = selectElement.selectedIndex;
    var selectedOption = selectElement.options[selectedIndex];
    var selectedValue = selectedOption.value;
    return (selectedValue);

    
}
var currentPageUrl = window.location.href;
var urlParts = currentPageUrl.split('/');
var curentPage = urlParts[urlParts.length - 2];
if (DetectLanguage()=='ar'){ 

    switch(curentPage){
    case 'Entrepreneurship':
        
    var titleP=document.getElementById('entrshipTitlP');
    var paragraph=document.getElementById('entrpshipPrgrph');
    var comment=document.getElementById('entrpshipCmnt');
    titleP.classList.add('font-arabic');

    paragraph.style.direction='rtl';
    comment.style.direction='rtl';

    case 'Entrepreneurship1':
        var comment=document.getElementById('titleItem');
        var titleP=document.getElementById('entrshipTitlP1');
        var paragraph=document.getElementById('entrpshipPrgrph1');
        titleP.classList.add('font-arabic');
        paragraph.style.direction='rtl';
        comment.style.direction='rtl';


    break

    }


    

  
    // --------------------------------------------------------------

}
        


