function setupPopups(){
	var topOfPage = 416;
	var pageID = $('div[data-role="page"]:last').attr('id');
	var prizeBtn = $('.sweeps-prizes-link');
	var eblastBtn = $('#eblast-link');
	var eblast = $('#eblasts');
	//var eblast = $('#eblasts.' + pageID);
	var overlay = $('#popup-overlay.' + pageID);
	var prizes = $('#prizes.' + pageID);
	var eblastClose = $('#eblasts.' + pageID + ' .close-popup');
	var prizesClose = $('#prizes.' + pageID + ' .close-popup');
	var doc = $(document);
	var scrollDff;
	var prizesOpen = false;
	var eblastOpen = false;
	
	console.log(prizes);
	console.log("Page ID = " + pageID);

	//Eblast Button ----------------------------
	
	eblastBtn.on('blur', function(event){
		this.blur();
	});
	
	eblastBtn.bind('mouseover', function(event){
		eblastBtn.css('cursor', 'pointer');
	});
	
	eblastBtn.on('click touchstart', function(event){
		eblast.removeAttr('style');
		scrollDff = doc.scrollTop() + parseInt(eblast.css('top'), 10);
		eblast.css({top: scrollDff + "px", zIndex: "1001", display: 'block'});
		//eblast.css({top: "center", display: "block", fixed: true, zIndex: "1000"});
		overlay.css('display', 'block');
		eblastBtn.css('display', 'none');
	});
	
	//Prize Buttons ----------------------------
	
	prizeBtn.on('click touchstart', function(event){
		prizes.removeAttr('style');
		scrollDff = doc.scrollTop() + parseInt(prizes.css('top'), 10);
		prizes.css({'top': scrollDff + "px", zIndex: "1001", display: 'block'});
		//prizes.css({top: "center", display: "block", fixed: true, zIndex: "1000"});
		overlay.css('display', 'block');
		
		console.log(prizes);
		console.log("Page ID = " + pageID);
	});
	
	prizeBtn.bind('mouseover', function(event){
		prizeBtn.css('cursor', 'pointer');
	});
	
	prizeBtn.on('blur', function(event){
		this.blur();
	});
	
	
	//Prize Popup ----------------------------
	
	prizesClose.on('click touchstart', function(event){
		prizes.removeAttr('style');
		prizes.css('display', 'none');
		overlay.css('display', 'none');
	});
	
	prizesClose.bind('mouseover', function(event){
		prizesClose.css('cursor', 'pointer');
	});
	
	prizesClose.on('blur', function(event){
		this.blur();
	});
	
	
	//Eblasts Popup ----------------------------
	
	eblastClose.on('click touchstart', function(event){
		eblast.removeAttr('style');
		eblast.css('display', 'none');
		overlay.css('display', 'none');
	});
	
	eblastClose.bind('mouseover', function(event){
		eblastClose.css('cursor', 'pointer');
	});
	
	eblastClose.on('blur', function(event){
		this.blur();
	});
}

$(document).ready(function() {
	setupPopups();
});

