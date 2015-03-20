$(document).ready(function() {

		

		$('.UPDATE-wheel img').hide();
		$('.UPDATE-wheel, .imgStart, .play').show();
		

		var $element = $('#initial-blink .change'), l = $element.length, i = 0;
					
					function go() {
    				$element.eq(i % l).fadeIn(150, function() {
        			$element.eq(i % l).fadeOut(150, go);
        			i++;
					//console.log("blinking");
    				})
}
go();



				var imgStart = $('.imgStart');
				var img1 = $('.img1');
				var img2 = $('.img2');
				var img3 = $('.img3');
				var img4 = $('.img4');
				var img5 = $('.img5');
				var img6 = $('.img6');
				var img7 = $('.img7');
				var img8 = $('.img8');
				var img9 = $('.img9');
				var img10 = $('.img10');
				var img11 = $('.img11');
				var img12 = $('.img12');
				var img_blank = $('.img_blank');
				
				imgStart.hide();
				img1.hide();
				img2.hide();
				img3.hide();
				img4.hide();
				img5.hide();
				img6.hide();
				img7.hide();
				img8.hide();
				img9.hide();
				img10.hide();
				img11.hide();
				img12.hide();
				img_blank.hide();

			function spin() {
				//winning numbers
				var winners = ['1','2','3','4','5','6','7','8'];
				//losing numbers
				var stop = ['9', '10', '11', '12'];
				//random array for the 4 losing panels
				var random = stop[Math.floor(Math.random() * stop.length)];
				var x = random;
				
				//determine page ID's
				//if it is a winning page. Cancel the random variable and set x to the number associated with the winning set timeout
				var visa = document.getElementById("visa");
				var chargeHub = document.getElementById("chargeHub"); 
				var GoPro = document.getElementById("GoPro");
				var memoPad = document.getElementById("memoPad");
				var beats = document.getElementById("beats"); 
				var scooter = document.getElementById("scooter"); 
				var pebble = document.getElementById("pebble-watch");
				var sony = document.getElementById("sony-tv"); 
				
				//Visa
				if(visa){
					random = undefined;
					x = winners[0];
					console.log(x);
					}	
				//Charge Hub	
				else if(chargeHub){
					random = undefined;
					x = winners[6];
					console.log(x);
					}
				//GoPro	
				else if(GoPro){
					random = undefined;
					x = winners[3];
					console.log(x);
					}
				//Memo Pad	
				else if(memoPad){
					random = undefined;
					x = winners[2];
					console.log(x);
					}
				//beats	
				else if(beats){
					random = undefined;
					x = winners[5];
					console.log(x);
					}
				//scooter	
				else if(scooter){
					random = undefined;
					x = winners[1];
					console.log(x);
					}
				//scooter	
				else if(pebble){
					random = undefined;
					x = winners[4];
					console.log(x);
					}
				//scooter	
				else if(sony){
					random = undefined;
					x = winners[7];
					console.log(x);
					}

				//Instructions
					// Options: random 1 2 3 4 5 6 7 8
					// none of the values here get quotes and random value will stop on 1 of 4 yellow spaces.
					// Example var x = 1   or   var x = random 

			/*
		
			Values that can be enterd above after return (All values must be in quotes i.e. return '5';)

			'random' (will land on a random yellow tile)
			 
			 1 = $500 VISA Travel Gift Card (Blue)
       		 2 = GoPro Camera (Pink)
             3 = ASUS Memo Pad (Green)
             4 = Motor Scooter (Orange)
             5 = Pebble Smartwatch (White)
             6 = Beats by Dr. Dre Pill Speaker (dark green)
             7 = MyCharge Hub (Purple)
             8 = SONY 70 TV (Red)

			*/
				
				
				
				


				function wipeout() {

					clearTimeout(a);
					clearTimeout(b);
					clearTimeout(c);
					clearTimeout(d);
					clearTimeout(e);
					clearTimeout(f);
					clearTimeout(g);
					clearTimeout(h);
					clearTimeout(i);
					clearTimeout(j);
					clearTimeout(k);
					
				}

				
				
				
				
				function blinking() {
					//check bottom right yellow loser panel
					if($('.img3').is(':visible')){
						$('.yellow1BG').show();
							setInterval(function(){
								$('.yellow1loser').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("bottom right loser flash");
						}
					//check bottom left yellow loser panel
					else if($('.img6').is(':visible')){
						$('.yellow2BG').show();
							setInterval(function(){
								$('.yellow2loser').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("bottom left loser flash");
						}
						//check top left yellow loser panel
					else if($('.img9').is(':visible')){
						$('.yellow3BG').show();
							setInterval(function(){
								$('.yellow3loser').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("top left loser flash");
						}
					//check top left yellow loser panel
					else if($('.img12').is(':visible')){
						$('.yellow4BG').show();
							setInterval(function(){
								$('.yellow4loser').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("top right loser flash");
						}
					//check purple winning panel - My Charge Hub
					else if($('.img2').is(':visible')){
						$('.purpleBG').show();
							setInterval(function(){
								$('.purpleWinner').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("purple winner flashing panel");
						}
					//check blue winning panel - Visa Gift Card
					else if($('.img11').is(':visible')){
						$('.blueBG').show();
							setInterval(function(){
								$('.blueWinner').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("blue winner flashing panel");
						}
					//check pink winning panel - GoPro
					else if($('.img10').is(':visible')){
						$('.pinkBG').show();
							setInterval(function(){
								$('.pinkWinner').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("pink winner flashing panel");
						}
					//check green winning panel - Memo Pad
					else if($('.img8').is(':visible')){
						$('.greenBG').show();
							setInterval(function(){
								$('.greenWinner').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("green winner flashing panel");
						}
					//check dark green winning panel - beats
					else if($('.img4').is(':visible')){
						$('.darkGreenBG').show();
							setInterval(function(){
								$('.darkGreenWinner').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("green winner flashing panel");
						}
					//check orange winning panel - scooter
					else if($('.img7').is(':visible')){
						$('.orangeBG').show();
							setInterval(function(){
								$('.orangeWinner').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("orange winner flashing panel");
						}
					//check orange winning panel - scooter
					else if($('.img5').is(':visible')){
						$('.whiteBG').show();
							setInterval(function(){
								$('.whiteWinner').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("white winner flashing panel");
						}
					//check orange winning panel - scooter
					else if($('.img1').is(':visible')){
						$('.redBG').show();
							setInterval(function(){
								$('.redWinner').fadeIn('fast').fadeOut('fast');
							},200);
							console.log("red winner flashing panel");
						}
					
					// "YOU WON" text image array
					var winningimage = ['you_won.png'];
					$('<img src="images/' + winningimage[0] + '">').appendTo('.playImg .winningImage').addClass('winningImg').fadeIn();	
					// Array of losing text images	
					var Losingimages = ['almost.png', 'sorry.png', 'notToday.png'];
					$('<img src="images/' + Losingimages[Math.floor(Math.random() * Losingimages.length)] + '">').appendTo('.playImg').addClass('losingImg').fadeIn();
					// alternate array of losing text images displayed in the upper left corner
					var AltLosingImages = ['try-again-tomorrow.png', 'try-daily.png'];
					$('<img style="width:100px; height:65px;" src="images/' + AltLosingImages[Math.floor(Math.random() * AltLosingImages.length)] + '">').appendTo('.UPDATE-wheel').addClass('AltLosingImg').fadeIn();
					
					var loser = document.getElementById("loser");
					var visa_winner = document.getElementById("visa");
					var GoPro_winner = document.getElementById("GoPro");
					var chargeHub_winner = document.getElementById("chargeHub");
					var memoPad_winner = document.getElementById("memoPad");
					var beats_winner = document.getElementById("beats");
					var scooter_winner = document.getElementById("scooter");
					var pebble_winner = document.getElementById("pebble-watch");
					var sony_winner = document.getElementById("sony-tv");
					
					//load losing pop up
					//Visa Script
					if(loser){ 
						$('.nonWinner-pop-up').delay(2200).fadeIn();
					console.log("load loser pop-up");
						}
					
					//This script hides losing message containers "try again","sorry" for winning pages
					//Checks for winng pop-up by checking the container DIV ID
					//Hides the footer and adds in the rules container
					//checks to see if there is a winning page and then hides the losing text and adjusts the footer
					if(visa_winner || GoPro_winner || chargeHub_winner || memoPad_winner || beats_winner || scooter_winner || pebble_winner || sony_winner){
						$('.AltLosingImg').hide();
						$('.losingImg').hide();
						$('.footer_button_holder').show(0).delay(2400).hide(0);
						
						/*
						setTimeout( function(){
      $('.wheel-of-pleasure-a-winner #sweeps-disclaimer-wrap').css({'height': '100px'});
    },2300);
	*/
	/*
	setTimeout( function(){
	$('.wheel-of-pleasure-a-winner #sweeps-disclaimer-wrap').css({'height': '103px'});
	},2300);
	*/
	setTimeout( function(){
	$('#sweeps-disclaimer').css({'margin-top': '65px'});
	},2400);
	
	
						$('.winning-rules').hide(0).delay(2300).show(0);
						console.log("footer size adjusted losing text hidden");
						}
					//Visa Script
					if(visa_winner){ 
						$('.win-gift-card').delay(2200).fadeIn();
					console.log("load visa winner pop-up");
						}
					//GoPro script	
					if(GoPro_winner){
						$('.win-GoPro').delay(2200).fadeIn();
					console.log("load Go Pro winner pop-up");
						}
					//ChargeHub Script	
					if(chargeHub_winner){
						$('.win-ChargeHub').delay(2200).fadeIn();
					console.log("load Charge Hub winner pop-up");
						}
					//memo Pad Script	
					if(memoPad_winner){
						$('.win-memoPad').delay(2200).fadeIn();
					console.log("load memo Pad winner pop-up");
						}
					//memo Pad Script	
					if(beats_winner){
						$('.win-beats').delay(2200).fadeIn();
					console.log("load beats winner pop-up");
						}
					//scooter Script	
					if(scooter_winner){
						$('.win-scooter').delay(2200).fadeIn();
					console.log("load scooter winner pop-up");
						}
					//pebble watch Script	
					if(pebble_winner){
						$('.win-pebble-watch').delay(2200).fadeIn();
					console.log("load pebble watch winner pop-up");
						}
					//sony Script	
					if(sony_winner){
						$('.win-sony-tv').delay(2200).fadeIn();
					console.log("load sony tv watch winner pop-up");
						}
						
				}//end blinking function

				console.log(x);
				
				
				//spin 1
				//starts with img 2
				setTimeout(function() { imgStart.hide(); img1.show(); },100);//100
				setTimeout(function() { img1.hide(); img2.show(); },150);//150
				setTimeout(function() { img2.hide(); img3.show(); },300);
				setTimeout(function() { img3.hide(); img4.show(); },450);
				setTimeout(function() { img4.hide(); img5.show(); },600);
				setTimeout(function() { img5.hide(); img6.show(); },750);
				setTimeout(function() { img6.hide(); img7.show(); },900);
				setTimeout(function() { img7.hide(); img8.show(); },1050);
				setTimeout(function() { img8.hide(); img9.show(); },1200);
				setTimeout(function() { img9.hide(); img10.show(); },1300);//100
				setTimeout(function() { img10.hide(); img11.show(); },1400);
				setTimeout(function() { img11.hide(); img12.show(); },1500);
				//spin 2
				setTimeout(function() { img12.hide(); img1.show(); },1600);
				setTimeout(function() { img1.hide(); img2.show(); },1700);
				setTimeout(function() { img2.hide(); img3.show(); },1800);
				setTimeout(function() { img3.hide(); img4.show(); },1900);
				setTimeout(function() { img4.hide(); img5.show(); },2000);
				setTimeout(function() { img5.hide(); img6.show(); },2100);
				setTimeout(function() { img6.hide(); img7.show(); },2200);
				setTimeout(function() { img7.hide(); img8.show(); },2300);
				setTimeout(function() { img8.hide(); img9.show(); },2400);
				setTimeout(function() { img9.hide(); img10.show(); },2500);
				setTimeout(function() { img10.hide(); img11.show(); },2600);
				setTimeout(function() { img11.hide(); img12.show(); },2700);
				//spin 3
				setTimeout(function() { img12.hide(); img1.show(); },2800);
				setTimeout(function() { img1.hide(); img2.show(); },2900);
				setTimeout(function() { img2.hide(); img3.show(); },3000);
				setTimeout(function() { img3.hide(); img4.show(); },3100);
				setTimeout(function() { img4.hide(); img5.show(); },3200);
				setTimeout(function() { img5.hide(); img6.show(); },3300);
				setTimeout(function() { img6.hide(); img7.show(); },3400);
				setTimeout(function() { img7.hide(); img8.show(); },3550);//150
				setTimeout(function() { img8.hide(); img9.show(); },3700);
				setTimeout(function() { img9.hide(); img10.show(); },3850);
				setTimeout(function() { img10.hide(); img11.show(); },4000);
				setTimeout(function() { img11.hide(); img12.show(); },4150);
				//spin 4
				setTimeout(function() { img12.hide(); img1.show(); },4300);
				setTimeout(function() { img1.hide(); img2.show(); },4500);//200
				setTimeout(function() { img2.hide(); img3.show(); },4700);
				setTimeout(function() { img3.hide(); img4.show(); },4900);
				setTimeout(function() { img4.hide(); img5.show(); },5100);
				setTimeout(function() { img5.hide(); img6.show(); },5350);//250
				setTimeout(function() { img6.hide(); img7.show(); },5600);
				setTimeout(function() { img7.hide(); img8.show(); },5850);
				setTimeout(function() { img8.hide(); img9.show(); },6100);
				setTimeout(function() { img9.hide(); img10.show(); },6400);//300
				setTimeout(function() { img10.hide(); img11.show(); },6700);
				setTimeout(function() { img11.hide(); img12.show(); },7000);
				//spin 5
				setTimeout(function() { img12.hide(); img1.show(); },7300);
				setTimeout(function() { img1.hide(); img2.show(); },7600);
				setTimeout(function() { img2.hide(); img3.show(); },7900);//400
				setTimeout(function() { img3.hide(); img4.show(); },8300);
				setTimeout(function() { img4.hide(); img5.show(); },8700);
				setTimeout(function() { img5.hide(); img6.show(); },9100);
				setTimeout(function() { img6.hide(); img7.show(); },9500);
				setTimeout(function() { img7.hide(); img8.show(); },10000);//500
				setTimeout(function() { img8.hide(); img9.show(); },10500);
				setTimeout(function() { img9.hide(); img10.show(); },11000);
				setTimeout(function() { img10.hide(); img11.show(); },11500);
				setTimeout(function() { img11.hide(); img12.show(); },12000);
				//final spin
				setTimeout(function() { img12.hide(); img1.show(); },12500);//600

				setTimeout(function() { 

                           if (x == 8) { 

                           	console.log('red'); //equals red

                           	wipeout();  blinking(); 
                           } 

				},12700);


				var k = setTimeout(function() { img1.hide(); img2.show(); },13100);

				setTimeout(function() { 

					
                       
                           if (x == 7) { 

                           	console.log('purple'); //equals purple

                           	wipeout();  blinking(); 
                           } 

				},13300);
				var j = setTimeout(function() { img2.hide(); img3.show(); },13700);
					
					setTimeout(function(){
	                           
	                           
							if (x == 9){ wipeout(); blinking();} 
						

					},13900);

				var a = setTimeout(function() { img3.hide(); img4.show(); },14300);//700

					setTimeout(function() { 

	                           if (x == 6) { 

	                           	console.log('dark green'); //equals dark green

	                           	wipeout();  blinking(); 
	                           }

					},14350);

				var b = setTimeout(function() { img4.hide(); img5.show(); },15000);

					setTimeout(function() { 

						
	                           if (x == 5) { 

	                           	console.log('white'); //equals white

	                           	wipeout(); blinking(); 
	                           } 

					},15100);

				var c = setTimeout(function() { img5.hide(); img6.show(); },15700);
					
					setTimeout(function(){

								
								if (x == 10){ 
									wipeout(); blinking();
								} 
						

					},15800);

				var d = setTimeout(function() { img6.hide(); img7.show(); },16400);

					setTimeout(function() { 

						
	                           if (x == 2) { 

	                           	console.log('orange'); //equals orange

	                           	wipeout(); blinking(); 
	                           } 

					},16550);

				var e = setTimeout(function() { img7.hide(); img8.show(); },17100);

					setTimeout(function() { 

		                           if (x == 3) { 

		                           	console.log('green'); //equals green

		                           	wipeout(); blinking();

		                           } 

						},17200);

				var f = setTimeout(function() { img8.hide(); img9.show(); },17800);//800
					
					setTimeout(function(){
						
						
	                           		
								
									if (x == 11){ 

										console.log('rand & 3'); //equals random

										wipeout();  blinking();
									} 

					},17900);

				var g = setTimeout(function() { img9.hide(); img10.show(); },18600);

					setTimeout(function() { 

						
		                           if (x == 4) { 

			                           	console.log('pink'); //equals pink

			                           	wipeout(); blinking(); 
		                           } 

					},18610);

				var h = setTimeout(function() { img10.hide(); img11.show(); },19400);

					setTimeout(function() { 

		                           if (x == 1) { 

			                           	console.log('blue'); //equals blue

			                           	wipeout(); blinking(); 
		                           } 

					},19410);
						
				var i = setTimeout(function() { img11.hide(); img12.show(); },20200);
					
					setTimeout(function(){
						
								
									if (x == 12){ 
										wipeout();  blinking();
									} 

					},20300);
			
			}//close spin function
			
		
		$('.play').on('click', function(event) {

			event.preventDefault();
			
			$('.play-now-text').fadeOut();
			$('#initial-blink').fadeOut();
			$element.stop().hide();
			

			spin(); //spin the wheel

			$(this).hide();

		});//end play click
		
		
		//Confirmation page click through
		$('.win-gift-card').on('click', function(event) {
			event.preventDefault();
			window.open('confirmation_test.html');
  return false;	
		});
		$('.win-GoPro').on('click', function(event) {
			event.preventDefault();
			window.open('confirmation_test.html');
  return false;	
		});
		$('.win-ChargeHub').on('click', function(event) {
			event.preventDefault();
			window.open('confirmation_test.html');
  return false;	
		});
		$('.win-beats').on('click', function(event) {
			event.preventDefault();
			window.open('confirmation_test.html');
  return false;	
		});
		$('.win-scooter').on('click', function(event) {
			event.preventDefault();
			window.open('confirmation_test.html');
  return false;	
		});
		$('.win-pebble-watch').on('click', function(event) {
			event.preventDefault();
			window.open('confirmation_test.html');
  return false;	
		});
		$('.win-sony-tv').on('click', function(event) {
			event.preventDefault();
			window.open('confirmation_test.html');
  return false;	
		});

	});