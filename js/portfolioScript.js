// JavaScript Document

var contentResize;

$(document).ready(function(){	
	resizeNavBar();
	startScroll();
	overlay();
	scrollAnimate();
	submitLogin();
	accordian();
	navbarFix();
	findPhone();
	findOrientation();
	//popUp();
});


//detects the mobile device and injects the phone number markup into the phone icon
function findPhone(){
		if (navigator.userAgent.match(/Android/i) ||
             navigator.userAgent.match(/webOS/i) ||
             navigator.userAgent.match(/iPhone/i) ||
             navigator.userAgent.match(/iPad/i) ||
             navigator.userAgent.match(/iPod/i) ||
             navigator.userAgent.match(/BlackBerry/) || 
             navigator.userAgent.match(/Windows Phone/i) || 
             navigator.userAgent.match(/ZuneWP7/i)
             ) {
				$('.phone').css("opacity","1");
                $('.phone').attr( 'href', 'tel:4846144871');
               }
	}
	
//find window portrait or landscape
function findOrientation(){
	window.addEventListener("orientationchange", function() {
		//portrait
			if(window.orientation == 0){
				$('div.parallax_wrapper').css("height","960px");
				$('.scrollbar').css({"position":"fixed","bottom":"0px"});
				console.log("portrait");
				}
			//landscape
			else if(window.orientation == 90){
				$('.name,.title').hide();
				$('div.parallax_wrapper').css("height","703px");
				$('.scrollbar').css({"position":"fixed","bottom":"0px"});
				console.log("landscape");
				}	
		}, false);
	$(window).scroll(function(){
			//$('.scrollBar').css({"position":"absolute"});
		});	
}


//navbar collapse fix for only one page
function navbarFix(){
    $(".navbar-inverse .navbar-nav li a").click(function(event) {
        console.log("navbar collapse");
    $("#navbar").removeClass("in").addClass("collapse");
    });
}


/* click pop up window
function popUp(){
		$('.rewards-popUp').click(function(){
			var disabled = $('.rewards-popUp').is(':disabled');
				$.get("popUp.html", function(data){
                    $("#appendToThis").append(data);
					console.log("click");
					
					$("#appendToThis #close").click(function(){
						$('#appendToThis').html('');
  						if(disabled){
    						$('.rewards-popUp').is(':enabled')
							console.log("click B");	
  						}
		});
					
			});
		});
}
*/


//finds the height of the browser and if fixes the navbar if the container class is reached
$(document).scroll(function(){
        var scroll = $(this).scrollTop();
        var topDist = $(".container").position();
        if (scroll > topDist.top) {
            $('.navbar').css({"position":"fixed","top":"0","z-index":"100"});
			$('.logo,.name,.title').hide();
			$('.logo,.name,.title').css({"z-index":"-1"});
			console.log("navbar fixed");
			console.log("logo name title hidden");
        } else {
			//$('.scrollBar').css({"position":"fixed","bottom":"0px"});
            $('.navbar').css({"position":"absolute","top":"auto","z-index":"100"});
			$('.logo,.name,.title').show();
			$('.logo,.name,.title').css({"z-index":"1"});
			console.log("navbar absolute");
			console.log("logo name title show");
        }	
 });
//resize the navbar to fit window 
function resizeNavBar(){
	$(window).on('load', function(){  
		contentResize = $('.scrollBar').offset().top;
		$('.parallax_wrapper').css({ height: ($(window).height()) +'px' });
	}); 
}
//scrollbar scrolling function on click
function startScroll(){
		$( '.scrollBar' ).on('click', function(event) {
		    //event.preventDefault();
		    var target = $('.navbar');
		    $('html, body').animate({
		        scrollTop: $(target).offset().top
		    }, 1000);
		});
}
//overlay on hover for main thumbnails
function overlay(){
	//hover state fade in and out for thumbnail overlay
	$('.thumbnail-wrapper').on("mouseover",function(){
    	$(this).find('.overlay').fadeIn(100);	 
	});
	$('.thumbnail-wrapper').on("mouseleave",function() {
    	$(this).find('.overlay').fadeOut(100);
	});
	
	//hover state fade in and out for thumbnail buttons

			$('.thumbnail-wrapper').hover(function(){
				$(this).find('.thumb-title').stop().animate({top: "25px"});
				$(this).find('.view-details-btn').stop().animate({right: "41px"});
				$(this).find('.view-site-btn,.loramead-thumb-btn').stop().animate({left: "37px"});	
		}, function(){	
				$(this).find('.thumb-title').stop().animate({top: "-35px"});	
				$(this).find('.view-details-btn').stop().animate({right: "-101px"});
				$(this).find('.view-site-btn,.loramead-thumb-btn').stop().animate({left: "-101px"});	
			});//end hover	
			
			var getWidth = $(window).width();
			
			$(window).on('resize',function() {
  				if (getWidth <= 1200) {
					
					$(this).find('.thumb-title').stop().animate({top: "-110px"});
				}
			});			
}//end overlay

//button animate scroll to div
function scrollAnimate(){
		//goodys rewards button
		$('.goodys-thumb-btn').on('click', function(event){
			$('html, body').animate({
        		scrollTop: $('#goodysProgram-content').offset().top - 150
    		}, 2000);
			console.log("clickA");
			});
		//pediacare rewards button
		$('.pediacare-thumb-btn').on('click', function(event){
			$('html, body').animate({
        		scrollTop: $('#pediacareProgram-content').offset().top - 25
    		}, 2000);
			console.log("clickA");
			});
		//pediacare rewards button
		$('.remedies-thumb-btn').on('click', function(event){
			$('html, body').animate({
        		scrollTop: $('#remediesProgram-content').offset().top - 25
    		}, 2000);
			console.log("clickA");
			});
		//Instrumental Beauty button
		$('.instrumental-beauty-btn').on('click', function(event){
			$('html, body').animate({
        		scrollTop: $('#instrumental-beauty').offset().top - 25
    		}, 2000);
			console.log("clickB");
			});
		//newport button
		$('.newport-content').on('click', function(event){
			$('html, body').animate({
        		scrollTop: $('#newport-content').offset().top - 25
    		}, 2000);
			console.log("clickB");
			});
		//van cleef button
		$('.jewelry-content').on('click', function(event){
			$('html, body').animate({
        		scrollTop: $('#jewelry-content').offset().top - 25
    		}, 2000);
			console.log("clickB");
			});
		//MC3 button
		$('.MC3-content-btn').on('click', function(event){
			$('html, body').animate({
        		scrollTop: $('#MC3-content').offset().top - 25
    		}, 2000);
			console.log("clickB");
			});
		//freedoms button
		$('.freedoms-content-btn').on('click', function(event){
			$('html, body').animate({
        		scrollTop: $('#freedoms-content').offset().top - 25
    		}, 2000);
			console.log("clickB");
			});
	}
	
function accordian(){
  //$('#demoList').sapling({ multiexpand: false, animation: true });
            var code = $('.code');
			$(".codeToggle li").click(
                function(){
					//code.slideUp();
					$(this).find('.code').slideToggle(500);
					console.log("click");   
                });
}
/********************LOGIN FUNCTION*************************/
function submitLogin(){
		$("#submit").click(function(event){
			event.preventDefault();
			var checkUser = $('#user').val();
			var checkPass = $('#pass').val();
			//alert(checkUser);
			//alert(checkPass);
	
		$.ajax({
				type: "GET",
				url:"http://nathanwaterman.github.io/website_portfolio/login/login.html",
				dataType:"text",
				success:function(data){
		
			//data.split('\n')[0]);
			
			var txtInfoA = data.split('\n')[0];
			var txtInfoB = data.split('\n')[1];
			var txtInfoC = data.split('\n')[2];
			var txtInfoD = data.split('\n')[3];
			var txtInfoE = data.split('\n')[4];
	
			alert(txtInfoA);
			alert(txtInfoB);
	
			if(checkUser === txtInfoA && checkPass === txtInfoB){
				alert("success");
				$('.restricted-site').css("opacity","1");
				$('.newport-site').attr('target','_blank').attr('href',txtInfoC);
				$('.flash-site').attr('target','_blank').attr('href',txtInfoD);
				$('.HTML5-site').attr('target','_blank').attr( 'href',txtInfoE);			
				$("#user").css("border","inset 2px");
				$("#pass").css("border","inset 2px");
				
				}
			if(checkUser != txtInfoA){
				$("#user").css("border","red inset 2px");
				//alert("try again");
				}
			if(checkPass != txtInfoB){
				$("#pass").css("border","red inset 2px");
				//alert("try again");
				}
			
			}//if
		});//ajax
		
	});//submit click function
}//submitLogin function



