//$(document).ready(function(){
  //  $("#btn1").click(function(){
    //  $("demo").Hide();
    //});

    //$("#btn2").click(function(){
      //  $("demo").Show();
     // });

      //$("#btn3").click(function(){
        //$("demo").Toggle();
     // });
//})

$(document).ready(function(){
    $("#btn1").click(function(){
    // $("#demo").hide();
    //  $("#demo").hide("slow"); 
    $("#demo").hide(6000);  
    });
    $("#btn2").click(function(){
    $("#demo").show("slow");   
    });
    $("#btn3").click(function(){
    $("#demo").toggle("slow");   
    });
})

