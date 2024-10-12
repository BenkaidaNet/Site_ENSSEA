$(document).ready(function() {
var observer00 = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                if (window.innerWidth < 700){

                // The element is currently in the viewport
                  $("#gridg_1").animate({
                    right: '40px'
                  }, 500);

                  $("#gridg_3").animate({
                    left: '20px'
                  }, 500);
                
                }else{
                    if((window.innerWidth<900)){
                        $("#gridg_1").animate({
                            right: '160px'
                        }, 500);
        
                        $("#gridg_3").animate({
                            left: '180px'
                        }, 500);
                       
                    }
                    else{
                        $("#gridg_1").animate({
                            right: '200px'
                        }, 500);
        
                        $("#gridg_3").animate({
                            left: '220px'
                        }, 500);
                       

                    }

            }
    }
    });
});
var target = document.querySelector('#gridg_1');
var target2 = document.querySelector('#gridg_3');

observer00.observe(target);
observer00.observe(target2);

var observer01 = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
            if (entry.isIntersecting)
                if (window.innerWidth < 700){
                    // The element is currently in the viewport
                      $("#gridg_2").animate({
                        right: '40px'
                      }, 500);
    
                      $("#gridg_4").animate({
                        left: '20px'
                      }, 700);
                      
                }else{
                    if((window.innerWidth<900)){
                        $("#gridg_2").animate({
                            right: '160px'
                        }, 500);
        
                        $("#gridg_4").animate({
                            left: '180px'
                        }, 700);
                        
                    }
                    else{
                        $("#gridg_2").animate({
                            right: '200px'
                        }, 500);
        
                        $("#gridg_4").animate({
                            left: '220px'
                        }, 500);
                      
                    }

                }
                
        
    });
});

// Select the element you want to observe
var target1 = document.querySelector('#gridg_2');
var target3 = document.querySelector('#gridg_4');




// Start observing the target element
observer01.observe(target1);
observer01.observe(target3);


var observer02 = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                if (window.innerWidth < 700){
    
                // The element is currently in the viewport
                $("#gridg_5").animate({
                    left: '20px'
                  }, 500);
                $("#gridg_6").animate({
                    right: '40px'
                  }, 500);
                
                }else{
                    if((window.innerWidth<900)){
                        $("#gridg_5").animate({
                            left: '180px'
                        }, 500);
                        $("#gridg_6").animate({
                            right: '160px'
                        }, 500);
        
                    }
                    else{
                        $("#gridg_6").animate({
                            right: '200px'
                        }, 500);
        
                        $("#gridg_5").animate({
                            left: '220px'
                        }, 500);
    
                    }
    
            }
    }
    });
    });
    var target5 = document.querySelector('#gridg_5');
    var target6 = document.querySelector('#gridg_6');
    
    observer02.observe(target5);
    observer02.observe(target6);
    


});


