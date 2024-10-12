

function DetectLanguage(){
    var selectElement = document.getElementById('selectlist');
    var selectedIndex = selectElement.selectedIndex;
    var selectedOption = selectElement.options[selectedIndex];
    var selectedValue = selectedOption.value;
    return (selectedValue);

    
}

if (DetectLanguage()=='ar'){ 
    var title=document.getElementById('eventTitl');
    var comment=document.getElementById('eventCmnt');
    title.style.direction='rtl';
    comment.style.direction='rtl';

    
    }


    

  
    // --------------------------------------------------------------


        


