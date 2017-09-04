$().ready(function(){
    $("input").mouseover(function(){
        $(".hint").show();
    });
    
    $("input").mouseout(function(){
        $(".hint").hide();
    });
  
})