function DetectLanguage(){
    // Get the <select> element by its ID
    var selectElement = document.getElementById('selectlist');

    // Get the index of the selected option
    var selectedIndex = selectElement.selectedIndex;

    // Get the selected option element
    var selectedOption = selectElement.options[selectedIndex];

    // Get the value and text of the selected option
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;

    return (selectedValue);
    
}

if (DetectLanguage()=='ar'){
    var paragraph1=document.getElementById('paragraph1');
    var paragraphDiv11=document.getElementById('div1_1');
    var paragraphDiv21=document.getElementById('div2_1');
    var paragraphDiv31=document.getElementById('div3_1');
   


    // var HeadDeprt=document.getElementById('HeadDeprt');
    // var descrptDepartmt=document.getElementById('descrptDepartmt');


    
    let font=document.getElementById('paragraph1');   
    font.classList.add("font-arabic");
    paragraph1.style.direction='rtl';
    paragraphDiv11.style.direction='rtl';
    paragraphDiv21.style.direction='rtl';
    paragraphDiv31.style.direction='rtl';



    


    
    

   
}

if (DetectLanguage()=='fr'){
   

 

   

}