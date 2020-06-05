$(function(){
	$(".menu_btn").on("click",function(){
		$(".menu_mobile").addClass("open");
	})

	$(".close_btn").on("click",function(){
		$(".menu_mobile").removeClass("open");
	})
})


$(document).ready(function(){
    $(function(){ $('.btn_aboutus').click(function(){ 
        $('html,body').animate({scrollTop:$('#aboutus').offset().top}, 500);});  
    }); 

     $(function(){ $('.btn_services').click(function(){ 
        $('html,body').animate({scrollTop:$('#services').offset().top}, 500);});  
    }); 

      $(function(){ $('.btn_environment').click(function(){ 
        $('html,body').animate({scrollTop:$('#environment').offset().top}, 500);});  
    }); 

       $(function(){ $('.btn_contactus').click(function(){ 
        $('html,body').animate({scrollTop:$('#contactus').offset().top}, 500);});  
    }); 
}); 