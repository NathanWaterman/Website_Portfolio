function setupPopups(){
		console.log("");
		console.log("-------------------------------------------------");
		console.log("              pleasurePopup.js is running");
		console.log("-------------------------------------------------");
		console.log("");

	var topOfPage = 416;
	var pageID = $('div[data-role="page"]:last').attr('id');
	var prizeBtn = $('.sweeps-prizes-link');
	var eblastBtn;
	/*                THIS TESTS IF A EMAIL REMINDER BUTTON EXISTS */
	if ($('.sweeps-prizes-link').length) {	console.log("              .sweeps-prizes-link found");};
	if ($('#eblast-link').length) {			console.log("              #eblast-link found");};
	if ($('#eblast-link-landing').length) {	console.log("              #eblast-link-landing found");};
	if ($('#eblast-link-entered').length) {	console.log("              #eblast-link-entered found");};
	if ($('#eblasts-already-entered').length) {	console.log("              #eblasts-already-entered found");};
	
	var eblast;
	var eblastClose;
	var overlay = $('#popup-overlay.' + pageID);
	var prizes = $('#prizes.' + pageID);
		var prizesClose = $('#prizes .close-popup');
	var doc = $(document);
	var scrollDff;
	var prizesOpen = false;
	var eblastOpen = false;
	
		console.log("");
		console.log("-------------------------------------------------");
		console.log("              eblasts = #eblasts-instant-win-already-entered");
		console.log("-------------------------------------------------");
		console.log("");
		eblast= $('.eblasts');
		eblastClose = $('.eblasts .close-popup');
		eblastBtn = $('.sweeps-eblast-link');
		eblastBtnSetup();
	
	
		
	console.log(prizes);
	console.log("Page ID = " + pageID);

	//Eblast Button ----------------------------

	function eblastBtnSetup(){
		console.log("");
		console.log("-------------------------------------------------");
		console.log("      eblast buttons are being setup");
		console.log("-------------------------------------------------");
		console.log("");
	
	eblastBtn.on('blur', function(event){
		this.blur();
		console.log("              eblast button blur");
	});
	
	eblastBtn.bind('mouseover', function(event){
		eblastBtn.css('cursor', 'pointer');
	});
	
	eblastBtn.on('click touchstart', function(event){
		console.log("              eblast button clicked");
		eblast.removeAttr('style');
		scrollDff = doc.scrollTop() + parseInt(eblast.css('top'), 12);
		eblast.css({top: scrollDff + "px", zIndex: "1001", display: 'block',});
		eblast.css(paddingTop="45px");
		//eblast.css({top: "center", display: "block", fixed: true, zIndex: "1000"});
		overlay.css('display', 'block');
		eblastBtn.css('display', 'none');
	});
	}
	//Prize Buttons ----------------------------
	
	prizeBtn.on('click touchstart', function(event){
		console.log("              prize button clicked");
		prizes.removeAttr('style');
		scrollDff = doc.scrollTop() + parseInt(prizes.css('top'), 10);
		prizes.css({'top': scrollDff + "px", zIndex: "1001", display: 'block'});
		//prizes.css({top: "center", display: "block", fixed: true, zIndex: "1000"});
		overlay.css('display', 'block');
		
		console.log(prizes);
		console.log("Page ID = " + pageID);
	});
	
	prizeBtn.bind('mouseover', function(event){
		console.log("              prize button over");
		prizeBtn.css('cursor', 'pointer');
	});
	
	prizeBtn.on('blur', function(event){
		console.log("              prize button blur");
		this.blur();
	});
	
	
	//Prize Popup ----------------------------
	
	prizesClose.on('click touchstart', function(event){
		console.log("              prize close button clicked");
		prizes.removeAttr('style');
		prizes.css('display', 'none');
		overlay.css('display', 'none');
	});
	
	prizesClose.bind('mouseover', function(event){
		prizesClose.css('cursor', 'pointer');
	});
	
	prizesClose.on('blur', function(event){
		console.log("              prize close button blur");
		this.blur();
	});
	
	
	//Eblasts Popup ----------------------------

	if(eblastClose){
	console.log("        eblast close buttons setup");
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
}

