    	$(document).ready(function(){
        	$(".responsive, .responsiveClose").click(function(){
            	$(".responsiveClose, .responsive").toggle();
                $(".menu a").css("display","block");
            });
            
            $(".responsiveClose").click(function(){
            	$(".menu a").css("display","none");
            });
            
		
            $(window).resize(function(){
                 
                  if ($(document).width()<992){
                      $(".menu a").hide();
                      $(".responsive").show();
                      $(".responsiveClose").hide();
                  } else {
                      $(".menu a").css("display","inline");
                      $(".responsive, .responsiveClose").hide();
                  }  
            });		
            
            $(document).scroll(function(){
                if($(document).scrollTop()>40){
	    			$(".header").css({
    	            	"background-color":"white",
        	        	"color":"black",
            	    	"padding-top":"20px",
                		"position":"fixed",
                		"top":"0px",
                		"box-shadow":"0px 0px 10px black"
                	});
                	$(".responsive").css({
                		"color":"black",
                        "top":"25px"
                	});
                    
                    $(".responsiveClose").css({
                		"color":"red",
                        "top":"25px"
                	});
                    
                    $(".menu").css("top","60px");
                    
                	$(".menu a").css("color","black");
                    
              } else if($(document).scrollTop()<40) {
              		$(".header").css({
    	            	"background-color":"transparent",
        	        	"color":"white",
            	    	"padding-top":"0px",
                		"position":"absolute",
                		"top":"70px",
                		"box-shadow":"none"
                	});
                	$(".responsive").css({
                		"color":"white",
                		"top":"73px"
                	});
                	$(".responsiveClose").css({
                		"color":"red",
                		"top":"73px"
                	});
                    
                    $(".menu").css("top","60px");
                    
                    
                    if($(document).width()>992){
                		$(".menu a").css("color","white");
                    } else {
                		$(".menu a").css("color","black");
                    }
              }  
  			});
        });
