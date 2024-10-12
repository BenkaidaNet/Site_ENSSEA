function DetectLanguage(){
    // Get the <select> element by its ID
    var selectElement = document.getElementById('selectlist');

    // Get the index of the selected option
    var selectedIndex = selectElement.selectedIndex;

    // Get the selected option element
    var selectedOption = selectElement.options[selectedIndex];

    // Get the value and text of the selected option
    var selectedValue = selectedOption.value;

    return (selectedValue);
    
}

if (DetectLanguage()=='ar'){   
    var prepaT=document.getElementById('Title');

    var HeadDeprt=document.getElementById('HeadDeprt');
    var descrptDepartmt=document.getElementById('descrptDepartmt');

    var Deprtmnt=document.getElementById('item');
    Deprtmnt.style.direction='rtl';
    

    prepaT.classList.remove("font-mono");
    prepaT.classList.add("font-arabic");
    HeadDeprt.style.direction='rtl';
    descrptDepartmt.style.direction='rtl';


   
}

if (DetectLanguage()=='fr'){
   

 

   

}