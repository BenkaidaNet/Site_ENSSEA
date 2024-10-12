function DetectLanguage(){
    var selectElement = document.getElementById('selectlist');

    var selectedIndex = selectElement.selectedIndex;

    var selectedOption = selectElement.options[selectedIndex];

    var selectedValue = selectedOption.value;

    return (selectedValue);
    
}

if (DetectLanguage()=='ar'){ 
    let history=document.getElementById('history');
    let history1=document.getElementById('historyPht1');
    let history2=document.getElementById('historyPht2');
    let mission=document.getElementById('mission');
    history.style.direction='rtl';
    history1.style.direction='rtl';
    history2.style.direction='rtl';
    mission.style.direction='rtl';


}
        


