$(function(){
	
	$('.thePrizes a').click(function(){
		$(".prizesPopUp").show();
	});
	
	$('.prizesPopUp a.popup-close-button').click(function(){
		$(".prizesPopUp").hide();
	});
	
	$('.eblastsPopUp a.popup-close-button').click(function(){
		$(".eblastsPopUp").hide();
	});
	
});

function eblastRemove(){
	$(".eblastsPopUp").show();
	$("#enterButtonOn a").removeClass("hide").animate({opacity:"0"}, 500, function(){
		$("#enterButtonOn").remove();
	});
};

function hidediv(){ 
	document.getElementById("howPopUp").style.display="none";
	$('#howcopy').css('margin-top','0');
};

function showdiv(){ 
	document.getElementById("howPopUp").style.display="block";
};