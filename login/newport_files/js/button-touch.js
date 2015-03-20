function setupButtonTouches(){
	var textButtons = $('.ui-btn[data-buttonType="yellow-link"]');
	textButtons.bind('touchstart mousedown', function(){
		$(this).removeClass('yellow-link-up');
		$(this).addClass('yellow-link-down');
		console.log('DOWN');
	});
	
	textButtons.bind('touchend mouseup', function(){
		$(this).removeClass('yellow-link-down');
		$(this).addClass('yellow-link-up');
		console.log('UP');
	});
	
	var blackjackButtons = $('#play_nav a');
	if( blackjackButtons ){
		blackjackButtons.bind('touchstart mousedown', function(){
			$(this).addClass('active');
			console.log('DOWN');
		});
		
		blackjackButtons.bind('touchend mouseup', function(){
			$(this).removeClass('active');
			console.log('UP');
		});
	}
}

$(document).ready(function() {
	setupButtonTouches();
});