$(document).ready(function(){
    $("#div1").click(function(){
      $("#div1_1").slideDown("slow");
      $("#div2_1").slideUp("slow");
      $("#div3_1").slideUp("slow");
      $("#div1").css("background-color", "yellow"); 
       });
    $("#div2").click(function(){
        $("#div2_1").slideDown("slow");
        $("#div1_1").slideUp("slow");
        $("#div3_1").slideUp("slow");
        $("#div2").css("background-color", "yellow"); 
      });

      $("#div3").click(function(){
        $("#div3_1").slideDown("slow");
        $("#div1_1").slideUp("slow");
        $("#div2_1").slideUp("slow");
        $("#div3").css("background-color", "yellow"); 
      });
   
  });


  