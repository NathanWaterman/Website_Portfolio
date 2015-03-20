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

var deckOfCards = [
    "c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13",
    "d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13",
    "h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","h11","h12","h13",
    "s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13"
];

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

you.handValue = new Array(1);

var dealer = {
	cardsPlayed:0,
	ace:0,
	aceUsed:0,
	value:0,
	cardCount:0
}

dealer.handValue = new Array(1);

var aceCount= 0;
var gameOver= -1;
var cardCount = 0;
var standCount=0;
var currentCard = 0;
var pauseBeforeOpeningNextPage = 60000;
 



function shuffleDeck(myArray) {
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
		if (currentCard ==  'c1' || currentCard ==  'd1' || currentCard ==  'h1' || currentCard ==  's1'){return 11;}
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
	
	if(cardValues == 11) {
		
		if(strWho =="You" && you.value >10){
        
		 return 1;
		}
		else {
   
        
        return 11;}
		
		if(strWho =="Dealer" && dealer.value >10){
		
		 return 1;
		}
		else {
       
        
        return 11;}
	}
	return cardValues;
}

function EvalSound(soundobj) {
	jQuery('body').append('<embed src="sound/cardFlip.wav" autostart=true width=0 height=0  hidden="true" loop="false">');

}

function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}




function addNewCard(){
		jQuery(".dealerBox").prepend("<img class='dealerCardViewOver' src='images/cards/"+deckOfCards[cardCount]+".png' style='z-index:"+cardCount+"' />");
	}

function PickACard(strWho){
    // draw a card general function.
    
    //find the card value from the deckOfCards
	card = deckOfCards[cardCount];
	if(strWho =="You"){
		if (you.cardCount==0){
            
			jQuery(".playerBox").append("<img class='initCardView' src='images/cards/"+deckOfCards[cardCount]+".png' />");
			you.cardCount += 1;
			cardCount += 1;
			EvalSound('click');
		}else{			
		jQuery(".playerBox").append("<img class='cardView' src='images/cards/"+deckOfCards[cardCount]+".png' />");
		you.cardCount += 1;
		cardCount += 1;
		EvalSound('click');
		}

	}
	else{
	if (dealer.cardCount==0){
		jQuery(".dealerBox").prepend("<img class='initDealerCardView' src='images/cards/t0.png' style='z-index:0' />");
		dealer.cardCount += 1;
		EvalSound('click');
	} else if (dealer.cardCount==1){
		jQuery(".dealerBox").append("<img class='dealerCardView' src='images/cards/"+deckOfCards[cardCount]+".png' style='z-index:"+cardCount+"' />");
		dealer.cardCount += 1;
		cardCount += 1;
		EvalSound('click');
	} else if (dealer.cardCount==2){
		jQuery(".initDealerCardView").animate({
			 width:"1px",
			 marginLeft:"+=44px",
			 marginRight:"+=44px"
			}, 500,'swing', function(){
				jQuery(".dealerBox").prepend("<img class='dealerCardViewOver' src='images/cards/"+deckOfCards[cardCount]+".png' style='z-index:"+cardCount+"' />");
				dealer.cardCount += 1;
				cardCount += 1;
 });

		EvalSound('click');
	} else {
		jQuery(".dealerBox").prepend("<img class='dealerCardView' src='images/cards/"+deckOfCards[cardCount]+".png' style='z-index:"+cardCount+"' />");
		dealer.cardCount += 1;
		cardCount += 1;
		EvalSound('click');
	}
}
	return cardValue(card,strWho);
}

function NewHand(){
    console.log("newhand");
	if(gameOver !=-1)
		{return;}
	else {
		setTimeout('PickACard("Dealer");',500);
		setTimeout('User();',1000);
		setTimeout('firstDealerCard();',1500);
		setTimeout('User();',2000);	
	}
}

/*

  DEALER FUCTIONS

*/

function DealersTurn(){
	
	if(dealer.value < 17)
		{
			setTimeout('dealerKeepsPlaying();',700);
		} else {
			setTimeout('dealerMustStand();',700);
		}
		
}


function dealerKeepsPlaying(){ 
    dealerDrawsAcard();
    countCardsInDealersHand();
    
}
    
    
    
function dealerMustStand(){
    LookAtHands();
}


function dealerDrawsAcard(){
    currentCardValue = PickACard("Dealer");
	dealer.value += currentCardValue;
    dealer.handValue[dealer.cardCount]=currentCardValue;
    console.log("dealer card is worth "+dealer.handValue[dealer.cardCount]);
	DealersTurn();
}
    
    
    
function countCardsInDealersHand(){
    dealer.handValue.sort(function(a,b){return a-b});
    dealer.value = 0;
    console.log("your hand is reset to "+dealer.value);
    for(i=0;i<dealer.handValue.length-1;i++){
    console.log("your hand has "+((dealer.handValue.length)-1) + " cards");
        cardValues = dealer.handValue[i];
        console.log("card "+((i)+1)+" value is "+cardValues);
        if(cardValues == 11) {
		
            if(dealer.value <=10){
                dealer.value += 11;
                console.log("your hand with high ace is now valued at "+dealer.value);
            }
            else {
                dealer.value +=1;
                console.log("your hand with low ace is now valued at "+dealer.value);
                }
        } else{
            dealer.value += cardValues;
            console.log("your hand with a card is now valued at "+dealer.value);
        }
    
    }
}


function Dealer(){
    jQuery('.dealerBox').fadeTo('fast',1.0);
    jQuery('.play_hit').fadeTo('fast',0.0);
    DealersTurn();

}


function firstDealerCard(){
    currentCardValue = PickACard("Dealer");
	dealer.value += currentCardValue;
    dealer.handValue[dealer.cardCount]=currentCardValue;
    console.log("dealer card is worth "+dealer.handValue[dealer.cardCount]);
}





/*

  PLAYER FUCTIONS

*/
function playerDrawCard(){
    currentCardValue = PickACard("You");
	you.value += currentCardValue;
    you.handValue[you.cardCount]=currentCardValue;
    console.log("player card is worth "+you.handValue[you.cardCount]);
    }
    
    
    
function countCardsInPlayersHand(){
    you.handValue.sort(function(a,b){return a-b});
    you.value = 0;
    console.log("your hand is reset to "+you.value);
    for(i=0;i<you.handValue.length-1;i++){
    console.log("your hand has "+((you.handValue.length)-1) + " cards");
        cardValues = you.handValue[i];
        console.log("card "+((i)+1)+" value is "+cardValues);
        if(cardValues == 11) {
		
            if(you.value <=10){
                you.value += 11;
                console.log("your hand with high ace is now valued at "+you.value);
            }
            else {
                you.value +=1;
                console.log("your hand with low ace is now valued at "+you.value);
                }
        } else{
            you.value += cardValues;
            console.log("your hand with a card is now valued at "+you.value);
        }
    
    }
}

function User(){
    playerDrawCard();
    countCardsInPlayersHand();
    
	if(you.value == 21 && you.cardCount ==2){
		$('#resultBlackjack').show();
		$(".play_hit").hide();
		$(".play_stand").fadeTo('fast',0.0);
    	jQuery('body').append('<embed src="sound/applause-blackjack.wav" autostart="true" hidden="true" loop="false">');
		gameOver=0;
		setTimeout('gotoUrl(2);',pauseBeforeOpeningNextPage);
	}
	else if(you.value > 21){
		$(".play_stand").fadeTo('fast',0.0);
		$(".play_hit").hide();
		$("#resultBust").show();
		jQuery('body').append('<embed src="sound/crowd-groan.wav" autostart="true" hidden="true" loop="false">');
		setTimeout('gotoUrl(0);',pauseBeforeOpeningNextPage);
		gameOver=0;
	}
}

function LookAtHands(){
	if (gameOver ==0 || you.value<10 || you.cardCount <2){return;}
	if(dealer.value > 21) {
		$(".play_stand").fadeTo('fast',0.0);
		$('#resultWin').show();
		jQuery('embed').remove();
    	jQuery('body').append('<embed src="sound/clapping.wav" autostart="true" hidden="true" loop="false">');
		gameOver=0;
		setTimeout('gotoUrl(2);',pauseBeforeOpeningNextPage);
} else if(you.value >= dealer.value) {
		$(".play_stand").fadeTo('fast',0.0);
		$('#resultWin').show();
		jQuery('embed').remove();
    	jQuery('body').append('<embed src="sound/clapping.wav" autostart="true" hidden="true" loop="false">');
		gameOver=0;
		setTimeout('gotoUrl(2);',pauseBeforeOpeningNextPage);
} else if(dealer.value == you.value) {
		$(".play_stand").fadeTo('fast',0.0);
		$('#resultWin').show();
    	jQuery('body').append('<embed src="sound/clapping.wav" autostart="true" hidden="true" loop="false">');
		gameOver=0;
		setTimeout('gotoUrl(2);',pauseBeforeOpeningNextPage);
} else {
		$(".play_stand").fadeTo('fast',0.0);
		$('#resultLose').show();
    	jQuery('body').append('<embed src="sound/crowd-groan.wav" autostart="true" hidden="true" loop="false">');
		gameOver=0;
		setTimeout('gotoUrl(1);',pauseBeforeOpeningNextPage);
		}
}

/*

  SETUP THE GAME

*/

function setupBlackjackTable(){
    //find first card and remove it from deck.
	deckOfCards.splice(deckOfCards.indexOf(cardx), 1);
    //shuffle deck
	shuffleDeck(deckOfCards);
    // add first card back to deck
	deckOfCards.splice(0,0,cardx);
    
    // at this point the game is set. Play begins when player clicks a button
}

$(function(){
	setupBlackjackTable();
});