$(document).ready(function(){
//Landing Page

	var rotate1 = 10;
	var rotate2 = -10;

	setInterval(function(){
	$('.gold-phone').animate({
		'-moz-transform':'rotate('+ rotate1 +'deg)',
        '-webkit-transform':'rotate('+ rotate1 +'deg)',
        '-o-transform':'rotate('+ rotate1 +'deg)',
        '-ms-transform':'rotate('+ rotate1 +'deg)',
        'transform':'rotate('+ rotate1 +'deg)'
	}, 400)
	.animate({
		'-moz-transform':'rotate('+ rotate2 +'deg)',
        '-webkit-transform':'rotate('+ rotate2 +'deg)',
        '-o-transform':'rotate('+ rotate2 +'deg)',
        '-ms-transform':'rotate('+ rotate2 +'deg)',
        'transform':'rotate('+ rotate2 +'deg)'
	}, 400)
	.animate({
		'-moz-transform':'rotate('+ 0 +'deg)',
        '-webkit-transform':'rotate('+ 0 +'deg)',
        '-o-transform':'rotate('+ 0 +'deg)',
        '-ms-transform':'rotate('+ 0 +'deg)',
        'transform':'rotate('+ 0 +'deg)'
	}, 400);
}, 1600);
	//markup must have a wrapper with an id of wrap and each element a class of banner
		$('.wrap .banner:eq(0)').show();
		$('.wrap .banner:gt(0)').hide();
	
		var c = 0;
		var last = $('.wrap .banner').length;
		var over = last + 1;

		setInterval(function(){
			
			var current = $('.wrap .banner:eq(' + c + ')');

			//Delays the hide until the next image fades over it.
			//setTimeout(function(){
				$(current).hide();
			//}, 400);

			if (c == last - 1){
				$('.wrap .banner:eq(0)').fadeIn();
			} else {
				$(current).next().fadeIn();
			}

			c++;
			if (c == last) {
				c = 0;
			}
			
		}, 5000);
	
	//Targets
	var epop = $('#eblast-popup');
	var elink = $('.sweeps-eblast-link')
	var sweepsPop = $('#about-the-sweeps-popup');
	var sweepsLink = $('.sweeps-about-link')

	elink.on('click', function(e){
	e.preventDefault();
	epop.fadeIn();
	sweepsPop.hide();

	});

	epop.on('click', function(){
		$(this).fadeOut();
	});
	elink.on('click', function(){
		$(this).css('display', 'block')
			   .css('height', '24px')
			   .html(' ');
	});
	sweepsLink.on('click', function(e){
		e.preventDefault();
		sweepsPop.fadeIn();
		epop.hide();

	});
	sweepsPop.on('click', function(e){
		e.preventDefault();
		$(this).fadeOut();
	});
});

//this needs to exist. It is called somewhere in the code and will break the site if deleted
function setupPopups(){}


//Next Page

