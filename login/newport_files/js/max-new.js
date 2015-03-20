var currDevice, homeLoaded, productsLoaded, wallpaper1Loaded, wallpaper2Loaded, wallpaper3Loaded, wallpaper4Loaded, winnersLoaded, footerHeigh, winHeight;

function setDeviceType(){
	var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
	if(isAndroid > -1){
    	currDevice = "android";
  	}  else {
		currDevice = "iphone";
  	}
	console.log("setDeviceType(): " + currDevice);	
}


	
	
function getViewportHeight(){
	console.log("$(window).height() " + $(window).height()); // returns height of browser viewport
	console.log("$(document).height() " + $(document).height()); // returns height of document
}

function addClassLoaded(id) {
	console.log("addClassLaoded(): " + id);
	var loadedSelector = $("#" + id + " .completion").children('p');
	
	loadedSelector.before('<div></div>');
	loadedSelector.addClass('loaded');
	
	// reset page's @loaded property every time the page is created.
	if (id == "home") {
		homeLoaded = 0;
		/*$("#submit").click(function() {
			console.log("email sign up: " + $("#email").val());	
		});*/
	}
	if (id == "products") {
		productsLoaded = 0;
	}
	if (id == "wallpaper1") {
		if (currDevice == "android"){
			$(".wallpaper_overlay_android").css('display', 'inherit');
		} else {
			$(".wallpaper_overlay_iphone").css('display', 'inherit');
		}
		wallpaper1Loaded = 0;
	}
	if (id == "wallpaper2") {
		if (currDevice == "android"){
			$(".wallpaper_overlay_android").css('display', 'inherit');
		} else {
			$(".wallpaper_overlay_iphone").css('display', 'inherit');
		}
		wallpaper2Loaded = 0;
	}
	if (id == "wallpaper3") {
		if (currDevice == "android"){
			$(".wallpaper_overlay_android").css('display', 'inherit');
		} else {
			$(".wallpaper_overlay_iphone").css('display', 'inherit');
		}
		wallpaper3Loaded = 0;
	}
	if (id == "wallpaper4") {
		if (currDevice == "android"){
			$(".wallpaper_overlay_android").css('display', 'inherit');
		} else {
			$(".wallpaper_overlay_iphone").css('display', 'inherit');
		}
		wallpaper4Loaded = 0;
	}
	if (id == "pleasure-payday") {
		winnersLoaded = 0;
	}
}

function finishTransition(id) {
	console.log("finishTransition(): " + id);
	
	//var winHeight = $(window).height();
	//if (winHeight <= 416) {
	//	winHeight = 416;
	//}
	
	//$(".header-resize").css('height', winHeight);
	
	console.log("resize header");
	
	//$('.header-resize').delay(1000).css('visibility', 'visible');	
	//$('#' + id).delay(1000).css('visibility', 'visible');	
	
	
		setTimeout(function(){
			   	$('.header-resize').css('visibility', 'visible');	
				$('#' + id).css('visibility', 'visible');	
		}, 10);
	
	
	
	// animate loader bar
	var preloadSelector = $("#" + id + " .completion").children('div');
	preloadSelector.css('width', '0');
	
	console.log("tween loader bar start");
	
	//$('#' + id).css('visibility', 'visible');
	
	preloadSelector.delay(500).animate({ width: "100%" }, 3000, function() { 
		
		
		console.log("tween loader bar completed");
		
		console.log("show content start");
		$(".content").show(function() {
			
			console.log("show content completed");
			var footerSelector = $(".footer-resize");
			var footerHeight;
			
			console.log("reset heights");
			footerSelector.css('min-height', '10px');
			footerSelector.css('height',  '10px');
			
			var docHeight = $(document).height();
			
			if ( docHeight < 2*winHeight ) {
				footerHeight = 2*winHeight - docHeight;
				footerSelector.css('height',  footerHeight);
			 }
			 
			console.log("resize footer");
			
			 goToByScroll(winHeight);
			
			// check id to see if page contains scrollable.
			// if page contains scrollable and page's @loaded property == 0, init scrollable for that page
			if (id == "home" && homeLoaded == 0){
				console.log("init scrollable on home");
				$("#browsable-home").scrollable({circular: true, mousewheel: true, speed: 400, touch: false}).navigator().autoscroll({interval: 3000}).bind("swipeleft", function(){
      				var api = $("#browsable-home").data("scrollable");
					api.next(400);
				}).bind("swiperight", function(){
      				var api = $("#browsable-home").data("scrollable");
					api.prev(400);
				});
				
				// Add to homescreen overlay
				console.log("add homescreen overlay");
				$("#a-add-newport[rel]").overlay({top: 'center', fixed: false, left: 0}); // top: 826
				if (currDevice == "android"){
					$(".simple_overlay_android").css('display', 'inherit');
				} else {
					$(".simple_overlay_iphone").css('display', 'inherit');
				}
				homeLoaded = 1;
			}
			if (id == "products" && productsLoaded == 0){
				console.log("init scrollable on products");
				var imgCount = 0;
				var currIndex = 0;
				var doAnim = true;
				$("#browsable-products").scrollable({circular: true, mousewheel: true, speed: 400, touch: false, onSeek: function(event) {
					// kill the autoscroll after first cycle completes
					
					var newIndex = this.getIndex();
					
					(newIndex > currIndex) ? imgCount++ : imgCount--;
					
					currIndex = newIndex;
					
					if (imgCount == this.getSize() - 1 && doAnim) {
						this.stop();
						doAnim = false;
						 
						var that = this; 
						window.setTimeout(function () {
							that.seekTo(0);
						}, 2000);
					}
					
				}}).navigator().autoscroll({interval: 2000}).bind("swipeleft", function(){
      				var api = $("#browsable-products").data("scrollable");
					api.next(400);
				}).bind("swiperight", function(){
      				var api = $("#browsable-products").data("scrollable");
					api.prev(400);
				});
				productsLoaded = 1;
			}
			if (id == "wallpaper1" && wallpaper1Loaded == 0){
				$("#browsable-wallpaper1").scrollable({circular: true, mousewheel: true, speed: 400, touch: false}).navigator().bind("swipeleft", function(){
      				var api = $("#browsable-wallpaper1").data("scrollable");
					api.next(400);
				}).bind("swiperight", function(){
      				var api = $("#browsable-wallpaper1").data("scrollable");
					api.prev(400);
				});
				wallpaper1Loaded = 1;
			}
			if (id == "wallpaper2" && wallpaper2Loaded == 0){
				$("#browsable-wallpaper2").scrollable({circular: true, mousewheel: true, speed: 400, touch: false}).navigator().bind("swipeleft", function(){
      				var api = $("#browsable-wallpaper2").data("scrollable");
					api.next(400);
				}).bind("swiperight", function(){
      				var api = $("#browsable-wallpaper2").data("scrollable");
					api.prev(400);
				});
				wallpaper2Loaded = 1;
			}
			if (id == "wallpaper3" && wallpaper3Loaded == 0){
				$("#browsable-wallpaper3").scrollable({circular: true, mousewheel: true, speed: 400, touch: false}).navigator().bind("swipeleft", function(){
      				var api = $("#browsable-wallpaper3").data("scrollable");
					api.next(400);
				}).bind("swiperight", function(){
      				var api = $("#browsable-wallpaper3").data("scrollable");
					api.prev(400);
				});
				wallpaper3Loaded = 1;
			}
			if (id == "wallpaper4" && wallpaper4Loaded == 0){
				$("#browsable-wallpaper4").scrollable({circular: true, mousewheel: true, speed: 400, touch: false}).navigator().bind("swipeleft", function(){
      				var api = $("#browsable-wallpaper4").data("scrollable");
					api.next(400);
				}).bind("swiperight", function(){
      				var api = $("#browsable-wallpaper4").data("scrollable");
					api.prev(400);
				});
				wallpaper4Loaded = 1;
			}
			if (id == "pleasure-payday" && winnersLoaded == 0){
				$("#browsable-winners").scrollable({circular: true, mousewheel: true, speed: 400, touch: false}).navigator().autoscroll({interval: 2000});
				winnersLoaded = 1;
			}
      	});
		
			
	});
}

function goToByScroll(value){
	console.log("scroll to new position");
	$('html,body').delay(100).animate({scrollTop: value},{ duration: 1000});
	//$('html,body').animate({scrollTop: value},{ duration: 'slow', easing: 'swing'});
	
}

$(function() {
	console.log('ready()');
});


$(document).bind('pageinit', function (e) {
	$.mobile.page.prototype.options.domCache = false;
	$('.ui-page').css('minHeight', screen.availHeight);
	$('#' + e.target.id).css('visibility', 'hidden');
	console.log('pageinit(): ' + e.target.id);
	setDeviceType();
	addClassLoaded(e.target.id);
	console.log("");	
}).bind('pagebeforeshow', function (e) {
	//console.log('pagebeforeshow(): ' + e.target.id);
	//$('#' + e.target.id).css('visibility', 'hidden');
	//console.log(e.target.id + " is hidden");
	//console.log("");
}).bind('pageshow', function (e) {
	console.log('pageshow(): ' + e.target.id);
	$('#' + e.target.id).css('visibility', 'hidden');
	console.log(e.target.id + " is hidden");
	console.log("");
	
	
	
	
	winHeight = $(window).height();
	if (winHeight <= 416) {
		winHeight = 416;
	}
	$(".header-resize").css('height', winHeight);
	//$.mobile.silentScroll(0);
	//console.log("$.mobile.silentScroll(0);");
	//finishTransition(e.target.id);
	//
	//$('#' + e.target.id).css('visibility', 'visible');
	//console.log(e.target.id + " is visible");
	//console.log("");
	
	
	setTimeout(function(){
			   		$('html,body').scrollTop(0);
				
						finishTransition(e.target.id);
					
				
		}, 10);
	
}).bind('pagebeforehide', function (e) {
	//	$.mobile.silentScroll(0);
	 console.log('pagebeforehide(): ' + e.target.id);
	 $('.header-resize').css('visibility', 'hidden');	
	$('#' + e.target.id).css('visibility', 'hidden');
	//console.log(e.target.id + " is hidden");
	//console.log("");
});
