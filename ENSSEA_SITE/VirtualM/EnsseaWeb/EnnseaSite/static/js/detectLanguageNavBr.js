function DetectLanguage(){
    var selectElement = document.getElementById('selectlist');

    var selectedIndex = selectElement.selectedIndex;

    var selectedOption = selectElement.options[selectedIndex];

    var selectedValue = selectedOption.value;

    return (selectedValue);
    
}

if (DetectLanguage()=='ar'){
    let nav=document.getElementById('navbarUL');
    let contnt=document.getElementById('container');
    let Ensseabr=document.getElementById('ensseaNumber');
    let sectioNws=document.getElementById('sectionNews');
    let sectionPlatfrmDgt=document.getElementById('sectioDifitalPlatfrm');
    let sidenav=document.getElementById('sideNav');
   
    nav.classList.remove("font-mono");
    nav.classList.add("font-arabic");

    
    contnt.style.flexDirection='row-reverse';     
    nav.style.flexDirection='row-reverse'; 
   
    Ensseabr.classList.remove("font-mono");
    Ensseabr.classList.add("font-arabic");

    sectioNws.classList.remove("font-mono");
    sectioNws.classList.add("font-arabic");

    sectionPlatfrmDgt.classList.remove("font-mono");
    sectionPlatfrmDgt.classList.add("font-arabic");

    sidenav.classList.remove("font-mono");
    sidenav.classList.add("font-arabic");



}

if (DetectLanguage()=='fr'){
   

    nav.classList.remove("mdlg:space-x-4");
    nav.classList.add("mdlg:space-x-2");

   

}