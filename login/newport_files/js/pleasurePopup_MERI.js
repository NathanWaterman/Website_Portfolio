function setupPopups(){
	var topOfPage = 416;
	var pageID = $('div[data-role="page"]:last').attr('id');
	var prizeBtn = $('#prizes-btn');
	var eblastBtn = $('#eblast-link');
	var eblast = $('#eblasts.' + pageID);
	var overlay = $('#popup-overlay.' + pageID);
	var prizes = $('#prizes.' + pageID);
	var eblastClose = $('#eblasts.' + pageID + ' .close-popup');
	var prizesClose = $('#prizes.' + pageID + ' .close-popup');
	var doc = $(document);
	var scrollDff;
	
	console.log(prizes);
	console.log("Page ID = " + pageID);

	//Eblast Button ----------------------------
	
	eblastBtn.on('blur', function(event){
		this.blur();
	});
	
	eblastBtn.bind('mouseover', function(event){
		eblastBtn.css('cursor', 'pointer');
	});
	
	eblastBtn.on('click', function(event){
		scrollDff = doc.scrollTop() - topOfPage;
		/*eblast.css("top", scrollDff + "px");
		eblast.css('display', 'block'); Old Way */
		eblast.css({top: "center", display: "block", fixed: true, zIndex: "400"});
		overlay.css('display', 'block');
		eblastBtn.css('display', 'none');
	});
	
	//Prize Buttons ----------------------------
	
	prizeBtn.on('click', function(event){
		scrollDff = doc.scrollTop() - topOfPage;
		/*prizes.css("top", scrollDff + "px"); Old Way
		prizes.css('display', 'block'); */
		prizes.css({top: "center", display: "block", fixed: true, zIndex: "400"});
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
	
	prizesClose.on('click', function(event){
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
	
	eblastClose.on('click', function(event){
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

