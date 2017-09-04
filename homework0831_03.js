$().ready(function(){
  var color = "white";
  var goColor = "black";
  $(".col").css("opacity","0");
  $(".hint").text("It's "+color+" turn!");
  
  $(".col").click(function(){
    $(this).css("opacity","1");
    $(this).addClass(color);
    $("#go").removeClass("white");
    $("#go").removeClass("black");
    $("#go").css("opacity","1");  
    $("#go").addClass(goColor);
    
    if(color==="white"){
      color="black";
      goColor="white";
    }
    else{
      color="white";
      goColor="black";    
    }
    $(".hint").text("It's "+color+" turn!");
  });
    
  $("#restart").click(function(){
    $(".col").css("opacity","0" );
    $("#go").css("opacity","0" );  
    color = "white";
    $(".hint").text("It's "+color+" turn!");
    $(".col").removeClass("white");
    $(".col").removeClass("black");
  });
});