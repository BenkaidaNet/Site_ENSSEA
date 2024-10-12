$(document).ready(function() {
    var targetPrepa = document.querySelector('#prepaCycle');
    var observerPrepa = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {
            // Your code here for each observed entry
            if (entry.isIntersecting) {

                // The element is currently in the viewport
                $("#gridPrepa").animate({
                    top: '10'
                }, 600);

          
              


            }
        });
    });
    observerPrepa.observe(prepaCycle);

// ----------------------------------------------------------

var target2ndCycle = document.querySelector('#grid2ndcycle');
    var observer2ndCycle = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            // Your code here for each observed entry
            if (entry.isIntersecting) {
                // The element is currently in the viewport
                $("#grid2ndcycle").animate({
                    top: '10'
                }, 600);
            }
        });
    });
    observer2ndCycle.observe(target2ndCycle);
// --------------------------------------------------------------
    // Create a new IntersectionObserver
    var observer00 = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    if (window.innerWidth < 700){

                    // The element is currently in the viewport
                      $("#gridg_1").animate({
                        right: '70px'
                      }, 500);
    
                      $("#gridg_3").animate({
                        left: '50px'
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
                            right: '70px'
                          }, 500);
        
                          $("#gridg_4").animate({
                            left: '50px'
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
                    left: '50px'
                  }, 500);
                $("#gridg_6").animate({
                    right: '70px'
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





// --------------------------------------------------------