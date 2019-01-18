$(document).ready(function () {
	
	var temp ="Gaytri";
	var tempSplit= temp.split();
	var final=[];
	for(var i=tempSplit.length;i>tempSplit.length;i--){
		final.push(tempSplit[i]);
		
	}
	console.log("final",final);
	
	
	var newString = "";
    for (var i = temp.length - 1; i >= 0; i--) {
        newString += temp[i];
    }
    return newString;
	console.log(newString);
    
    //slide effect  
    
        $("#experience_button").click(function() {
        $('html,body').animate({
            scrollTop: $(".experience_block").offset().top},
            'slow');
        });    
       $("#location_button").click(function() {
        $('html,body').animate({        
            scrollTop: $(".location_block").offset().top},
            'slow');
       });   
    
    
    //slide effect for location
    /*
    $(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});*/
	
})