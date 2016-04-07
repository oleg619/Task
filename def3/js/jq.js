var width = $(document).width() - 100;
var height = $(document).height() - 100;
$("#topright").offset({top:0, left:width});
$("#bottomleft").offset({top:height, left:0});
$("#bottomright").offset({top:height, left:width});
var interval = 1000;
function slide()
{
	$("#topleft").animate({top:height/2+50, left:width/2+50}, "slow");
	$("#topright").animate({top:height/2+50, left:width/2-50}, "slow");
	$("#bottomleft").animate({top:height/2-50, left:width/2+50}, "slow");
	$("#bottomright").animate({top:height/2-50, left:width/2-50}, "slow");
}
function circle()
{
	$("#topleft").animate({top:height/2-50, left:width/2+50});
	$("#topright").animate({top:height/2+50, left:width/2+50});
	$("#bottomleft").animate({top:height/2-50, left:width/2-50});
	$("#bottomright").animate({top:height/2+50, left:width/2-50});
	
	$("#topleft").animate({top:height/2+50, left:width/2+50});
	$("#topright").animate({top:height/2+50, left:width/2-50});
	$("#bottomleft").animate({top:height/2-50, left:width/2+50});
	$("#bottomright").animate({top:height/2-50, left:width/2-50});
	
	$("#topleft").animate({top:height/2+50, left:width/2-50});
	$("#topright").animate({top:height/2-50, left:width/2-50});
	$("#bottomleft").animate({top:height/2+50, left:width/2+50});
	$("#bottomright").animate({top:height/2-50, left:width/2+50});
	
	$("#topleft").animate({top:height/2-50, left:width/2-50});
	$("#topright").animate({top:height/2-50, left:width/2+50});
	$("#bottomleft").animate({top:height/2+50, left:width/2-50});
	$("#bottomright").animate({top:height/2+50, left:width/2+50});
}
$(function(){
setTimeout(function(){ $("#topleft").animate({top:height/2-50, left:width/2-50}); }, 1*interval);
setTimeout(function(){ $("#topright").animate({top:height/2-50, left:width/2+50}); }, 2*interval);
setTimeout(function(){ $("#bottomleft").animate({top:height/2+50, left:width/2-50}); }, 3*interval);
setTimeout(function(){ $("#bottomright").animate({top:height/2+50, left:width/2+50}); }, 4*interval);
setTimeout(circle, 5*interval);
setTimeout(slide, 5*interval);
});