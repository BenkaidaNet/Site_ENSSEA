$(document).ready(function() {

    // const drop1=document.getElementById('drop_down1');
$(window).on("resize", function() {
    // Refresh the window when resized using jQuery
    location.reload();
  });
if($(window).width()<1000){
    $("#item1").hover(function () {
        // over
    $("#item1").attr('style', 'padding-bottom:130px');
    $("#drop_down1").slideDown(300);

    }, function () {
                // out
    $("#drop_down1").slideUp(300);  
    $("#item1").removeAttr('style','padding-bottom:130px');


    }
    );


    $("#item2").hover(function () {
        // over
    $("#item2").attr('style','padding-bottom:85px');
    $("#drop_down2").slideDown(300);
    }, function () {
            // out
    
    $("#drop_down2").slideUp(300);  
    $("#item2").removeAttr('style','padding-bottom:85px');
   }
    );
    

    $("#item3").hover(function(){
        $("#item3").attr('style','padding-bottom:235px');
        $("#drop_down3").slideDown(300);
    },function(){
        $("#drop_down3").slideUp(300);
        $("#item3").removeAttr('style','padding-bottom:235px');

    }
    );


    $("#item4").hover(function(){
        $("#item4").attr('style','padding-bottom:120px');
        $("#drop_down4").slideDown(300);
    },function(){
        $("#drop_down4").slideUp(300);
        $("#item4").removeAttr('style','padding-bottom:120px');

    }
    );

    $("#item6").hover(function(){
        $("#item6").attr('style','padding-bottom:156px');
        $("#drop_down6").slideDown(300);

    },function(){
        $("#drop_down6").slideUp(300);
        $("#item6").removeAttr('style','padding-bottom:156px');

    }
    )

}else{

    $("#item1, #drop_down1").mouseenter(function() {
        $("#drop_down1").stop(true, true).slideDown(200);
    });

    $("#item1, #drop_down1").mouseleave(function() {
        $("#drop_down1").stop(true, true).slideUp(200);
    });

  
    $("#item2, #drop_down2").mouseenter(function() {
        $("#drop_down2").stop(true, true).slideDown(200);
    });

    $("#item2, #drop_down2").mouseleave(function() {
        $("#drop_down2").stop(true, true).slideUp(200);
    });

    $("#item3, #drop_down3").mouseenter(function() {
        $("#drop_down3").stop(true, true).slideDown(200);
    });

    $("#item3, #drop_down3").mouseleave(function() {
        $("#drop_down3").stop(true, true).slideUp(200);
    });

    $("#item4, #drop_down4").mouseenter(function() {
        $("#drop_down4").stop(true, true).slideDown(200);
    });

    $("#item4, #drop_down4").mouseleave(function() {
        $("#drop_down4").stop(true, true).slideUp(200);
    });

    $("#item6, #drop_down6").mouseenter(function() {
        $("#drop_down6").stop(true, true).slideDown(200);
    });

    $("#item6, #drop_down6").mouseleave(function() {
        $("#drop_down6").stop(true, true).slideUp(200);
    });

}   
});