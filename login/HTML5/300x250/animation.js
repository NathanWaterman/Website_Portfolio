
 window.onorientationchange = function(){

    var orientation = "unknown";
    switch (window.orientation)
    {
        case 0:
          orientation = "portrait";
           $("#land").css({display:'none'});
           $("#port").css({display:'block'});
           anim_portrait();
          break;
        case 90:
          orientation = "landscape counter clockwise";
           $("#land").css({display:'block'});
           $("#port").css({display:'none'});
           anim_landscape();
          break;
        case -90:
          orientation = "landscape clockwise";
           $("#land").css({display:'block'});
           $("#port").css({display:'none'});
           anim_landscape();
          break;
        case 180:
          orientation = "upside down";
           $("#land").css({display:'none'});
           $("#port").css({display:'block'});
           anim_portrait();
          break;
    }
};




var a,b,c,d,e,f,g,h,i,a_p,b_p,c_p,d_p,e_p,f_p,g_p,h_p,i_p;

$(document).ready(function(){
				onorientationchange();
				 anim_landscape();
			
			});


/////////animation landscape/////////
function anim_landscape(){

/////////stop anim portrait/////////
$('#etoile_p,#montre_p,#homme_p,#femme_p,#pont_p,#idyllic_p,#logo_p,#vca_p,#baseline_p,#txt_p').stop();

window.clearTimeout(a);
window.clearTimeout(b);
window.clearTimeout(c);
window.clearTimeout(d);
window.clearTimeout(e);
window.clearTimeout(f);
window.clearTimeout(g);
window.clearTimeout(h);
window.clearTimeout(i);

/////////initialisation css de l'anim/////////
$('#etoile,#montre,#homme,#femme,#pont,#idyllic,#logo,#vca,#baseline,#txt,#link35').css({opacity:0});

$('#etoile').css({ opacity:1});
$('#montre').css({opacity:0});
$('#pont').css({opacity:1});
$('#homme').css({ opacity:1,'-webkit-transform': 'rotateZ(100deg)'});
$('#femme').css({ opacity:1,'-webkit-transform': 'rotateZ(80deg)'});
$('#idyllic').css({opacity:0});
$('#logo').css({opacity:0});
$('#vca').css({opacity:1, 'top':'-15%','-webkit-transform':'translateY(0)'});
$('#baseline').css({opacity:1, 'top':'-14%','-webkit-transform': 'translateY(0)'});
$('#txt').css({opacity:0});

a = setTimeout(function() { $('#montre').animate({opacity:1}, 1000); $('#logo').addClass('logoReposition').animate({opacity:1}, 1000);},0);
b = setTimeout(function() {	$('#homme').css({"-webkit-transform":" rotateZ(89deg)" }); },1800);
c = setTimeout(function() {	$('#femme').css({"-webkit-transform":" rotateZ(90deg)" }); },1800);
d =setTimeout(function() { $('#montre').animate({opacity:0}, 'slow');  $('#etoile').animate({opacity:0}, 'slow'); },5300);
e = setTimeout(function() { $('#idyllic').animate({opacity:1}, 800); },5500);
f = setTimeout(function() { $('#idyllic').animate({opacity:0}, 500); $('#logo').animate({opacity:0}, 500); },6500);
g = setTimeout(function() { $('#logo').removeClass('logoReposition').animate({opacity:1}, 1500); $('#baseline').css({"-webkit-transform":" translatey(108px)"});	 },7300);
h = setTimeout(function() { $('#vca').css({"-webkit-transform":" translatey(74px)"});	 },7600);
i = setTimeout(function() { $('#txt').animate({opacity : 1}, 2200); },7900);
}

