// JavaScript Document

// implement slice

if (!Array.prototype.lastIndexOf)
{
  Array.prototype.lastIndexOf = function(elt)
  {
    var len = this.length;
    var from = Number(arguments[1]);
    if (isNaN(from))
    {
      from = len - 1;
    }
    else
    {
      from = (from < 0)
           ? Math.ceil(from)
           : Math.floor(from);
      if (from < 0)
        from += len;
      else if (from >= len)
        from = len - 1;
    }
    for (; from > -1; from--)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

var gameState ={
	currentCard: 0,
	cardCount:0,
	gameOver: -1
	
	}

var you = {
	cardsPlayed:0,
	ace:0,
	aceUsed:0,
	value:0,
	cardCount:0
	}

var dealer = {
	cardsPlayed:0,
	ace:0,
	aceUsed:0,
	value:0,
	cardCount:0
}


var aceCount= 0;
var gameOver= -1;
var cardCount = 0;
var standCount=0;
var currentCard=0;
var urlPause = 6000;

/* added cardList var - fixed image issue 06/20/12 meri */
var cardList = [
    "c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13",
    "d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13",
    "h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","h11","h12","h13",
    "s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13"
];


function fisherYates(myArray) {
	var i = myArray.length;
	if (i == 0) {return false;}
	while (--i) {
		var j = Math.floor(Math.random()*(i+1));
		var tempi = myArray[i];
		var tempj = myArray[j];
		myArray[i] = tempj;
		myArray[j] = tempi;
	}
}

function checkCardValue(currentCard){
		if (currentCard ==  'c1' || currentCard ==  'd1' || currentCard ==  'h1' || currentCard ==  's1'){return 1;}
		if (currentCard ==  'c2' || currentCard ==  'd2' || currentCard ==  'h2' || currentCard ==  's2'){return 2;}
		if (currentCard ==  'c3' || currentCard ==  'd3' || currentCard ==  'h3' || currentCard ==  's3'){return 3;}
		if (currentCard ==  'c4' || currentCard ==  'd4' || currentCard ==  'h4' || currentCard ==  's4'){return 4;}
		if (currentCard ==  'c5' || currentCard ==  'd5' || currentCard ==  'h5' || currentCard ==  's5'){return 5;}
		if (currentCard ==  'c6' || currentCard ==  'd6' || currentCard ==  'h6' || currentCard ==  's6'){return 6;}
		if (currentCard ==  'c7' || currentCard ==  'd7' || currentCard ==  'h7' || currentCard ==  's7'){return 7;}
		if (currentCard ==  'c8' || currentCard ==  'd8' || currentCard ==  'h8' || currentCard ==  's8'){return 8;}
		if (currentCard ==  'c9' || currentCard ==  'd9' || currentCard ==  'h9' || currentCard ==  's9'){return 9;}
		if (currentCard == 'c10' || currentCard == 'd10' || currentCard == 'h10' || currentCard == 's10'){return 10;}
		if (currentCard == 'c11' || currentCard == 'd11' || currentCard == 'h11' || currentCard == 's11'){return 10;}
		if (currentCard == 'c12' || currentCard == 'd12' || currentCard == 'h12' || currentCard == 's12'){return 10;}
		if (currentCard == 'c13' || currentCard == 'd13' || currentCard == 'h13' || currentCard == 's13'){return 10;}
}


// CARD VALUES
function cardValue(card,strWho){
	cardValues = checkCardValue(card);
	
	if(cardValues == 1) {
		
		if(strWho =="You" && you.value >10){
			
		 return 1;
		}
		else return 11;
		
		if(strWho =="Dealer" && dealer.value >10){
		
		 return 1;
		}
		else return 11;
	}
	return cardValues;
}


function EvalSound(soundobj) {

}



function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}




function addNewCard(){
		jQuery(".dealerBox").prepend("<img class='dealerCardViewOver' src='themes/images/pleasuredraw2012/cards/"+deckOfCards[cardCount]+".png' style='z-index:"+cardCount+"' />");
	}

function iwPickACard(strWho){
	card = cardList[cardCount];
	
	if(strWho =="Winner"){
		if (you.cardCount==0){
				
			jQuery(".playerBox").append("<img class='initCardView' src='themes/images/pleasuredraw2012/cards/d1.png' />");
			you.cardCount += 1;
			cardCount += 1;
			EvalSound('click');
		}else{			
			jQuery(".playerBox").append("<img class='cardView' src='themes/images/pleasuredraw2012/cards/c11.png' />");
			you.cardCount += 1;
			cardCount += 1;
			EvalSound('click');
		}
	}
	
	else if(strWho =="You"){
		if (you.cardCount==0){
				
			jQuery(".playerBox").append("<img class='initCardView' src='themes/images/pleasuredraw2012/cards/d1.png' />");
			you.cardCount += 1;
			cardCount += 1;
			EvalSound('click');
		}/*else{			
			jQuery(".playerBox").append("<img class='cardView' src='themes/images/pleasuredraw2012/cards/c11.png' />");
			you.cardCount += 1;
			cardCount += 1;
			EvalSound('click');
		}*/

	}
	else{
	if (dealer.cardCount==0){
		jQuery(".dealerBox").prepend("<img class='initDealerCardView' src='themes/images/pleasuredraw2012/cards/t0.png' style='z-index:0' />");
		dealer.cardCount += 1;
		EvalSound('click');
	} else if (dealer.cardCount==1){
		jQuery(".dealerBox").append("<img class='dealerCardView' src='themes/images/pleasuredraw2012/cards/"+cardList[cardCount]+".png' style='z-index:"+cardCount+"' />");
		dealer.cardCount += 1;
		cardCount += 1;
		EvalSound('click');
	}else if (dealer.cardCount==2){
		jQuery(".initDealerCardView").animate({
			 width:"1px",
			 marginLeft:"+=44px",
			 marginRight:"+=12px"
			}, 500,'swing', function(){
				jQuery(".dealerBox").prepend("<img class='dealerCardViewOver' src='themes/images/pleasuredraw2012/cards/"+cardList[cardCount]+".png' style='z-index:"+cardCount+"' />");
				dealer.cardCount += 1;
				cardCount += 1;
 });
			
		EvalSound('click');
	} else {
		jQuery(".dealerBox").prepend("<img class='dealerCardView' src='themes/images/pleasuredraw2012/cards/"+cardList[cardCount]+".png' style='z-index:"+cardCount+"' />");
		dealer.cardCount += 1;
		cardCount += 1;
		EvalSound('click');
	}
}
	return cardValue(card,strWho);
}


function NewHand(){
	if(gameOver !=-1)
		{return;}
	else {
		setTimeout('PickACard("Dealer");',500);
		setTimeout('User();',1000);
		setTimeout('dealer.value += PickACard("Dealer");',1500);
		setTimeout('User();',2000);	
	}
}

function NewInstantWin() {
	setTimeout('iwPickACard("Dealer");',500);
	setTimeout('you.value += iwPickACard("Winner");',1000);
	setTimeout('dealer.value += PiciwPickACardkACard("Dealer");',1500);
	setTimeout('you.value += iwPickACard("Winner");',2000);	
	setTimeout('FinishInstantWin();',5200);	
}

function FinishInstantWin() {
	
	killClicks();
			
	$(".instantWin1").fadeIn(300);
 	$(".instantWin1").delay(3000).fadeOut(300);
 	$(".instantWin2").delay(3000).fadeIn(600);
 	setTimeout(function() {
 		gotoiwWinner();
	}, 8000);
}

function killClicks() {
console.log("kill flicks")
	$(".play_hit").removeAttr("onclick");
	$(".play_stand").removeAttr("onclick");
}


function Dealer(){
	jQuery('.dealerBox').fadeTo('fast',1.0);
	//jQuery('.play_hit').fadeTo('fast',0.0);
	if(dealer.value < 17)
		{
			setTimeout('popAcard();',700);
		} else { 
			setTimeout('LookAtHands();',700);
		}
		
}

function popAcard(){
	dealer.value += PickACard("Dealer");
	Dealer();
}

function User(){	
	you.value += PickACard("You");
	if(you.value == 21 && you.cardCount ==2){
		$('#resultBlackjack').show();
		//$(".play_hit").hide();
		//$(".play_stand").fadeTo('fast',0.0);
		gameOver=0;
		killClicks();
		setTimeout('gotoUrl(2);',urlPause);
	}
	/*else if(you.value > 21){
		//$(".play_stand").fadeTo('fast',0.0);
		//$(".play_hit").hide();
		$("#resultBust").show();
		killClicks();
		setTimeout('gotoUrl(0);',urlPause);
		gameOver=0;
	}*/
}

function LookAtHands(){
	if (gameOver ==0 || you.value<10 || you.cardCount <2){return;}
	if(dealer.value > 21) {
		//$(".play_stand").fadeTo('fast',0.0);
		$('#resultWin').show();
		jQuery('embed').remove();
		gameOver=0;
		killClicks();
		setTimeout('gotoUrl(2);',urlPause);
} else if(you.value >= dealer.value) {
		//$(".play_stand").fadeTo('fast',0.0);
		$('#resultWin').show();
		jQuery('embed').remove();
		gameOver=0;
		killClicks();
		setTimeout('gotoUrl(2);',urlPause);
} else if(dealer.value == you.value) {
		//$(".play_stand").fadeTo('fast',0.0);
		$('#resultWin').show();
		gameOver=0;
		killClicks();
		setTimeout('gotoUrl(2);',urlPause);
} else {
		//$(".play_stand").fadeTo('fast',0.0);
		$('#resultLose').show();
		gameOver=0;
		killClicks();
		setTimeout('gotoUrl(1);',urlPause);
		}
}

function setBj(){
	/*cardList.splice(cardList.indexOf(cardx), 1);
	fisherYates(cardList);
	cardList.splice(0,0,cardx);*/
}

$(function(){
	setBj();
});