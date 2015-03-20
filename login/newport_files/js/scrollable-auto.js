/**
 * @license 
 * jQuery Tools @VERSION / Scrollable Autoscroll
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/scrollable/autoscroll.html
 *
 * Since: September 2009
 * Date: @DATE 
 */
(function($) {		

	var t = $.tools.scrollable; 

	t.autoscroll = {

		conf: {
			autoplay: true,
			interval: 100,
			autopause: true
		}
	};	

	// jQuery plugin implementation
	$.fn.autoscroll = function(conf) { 

		if (typeof conf == 'number') {
			conf = {interval: conf};	
		}

		var opts = $.extend({}, t.autoscroll.conf, conf), ret;

		this.each(function() {		

			var api = $(this).data("scrollable"),
			    root = api.getRoot(),
			    // interval stuff
    			timer, stopped = false;

	    /**
      *
      *   Function to run autoscroll through event binding rather than setInterval
      *   Fixes this bug: http://flowplayer.org/tools/forum/25/72029
      */
     function scroll(){
        // Fixes https://github.com/jquerytools/jquerytools/issues/591
        if (timer) clearTimeout(timer); // reset timeout, especially for onSeek event
        timer = setTimeout(function(){ // assign a new one
          api.next();
        }, opts.interval);
      }
			if (api) { ret = api; }

			api.play = function() { 

				// do not start additional timer if already exists
				if (timer) { return; }

				stopped = false;

        root.bind('onSeek', scroll);
        scroll();
			};	

			api.pause = function() {
				timer = clearTimeout(timer);  // clear any queued items immediately
        root.unbind('onSeek', scroll);
			};

			// resume playing if not stopped
			api.resume = function() {
				stopped || api.play();
			};

			// when stopped - mouseover won't restart 
			api.stop = function() {
			  stopped = true;
				api.pause();
			};

			/* when mouse enters, autoscroll stops */
			if (opts.autopause) {
				root.add(api.getNaviButtons()).hover(api.pause, api.resume);
			}

			if (opts.autoplay) {
				api.play();				
			}

		});

		return opts.api ? ret : this;

	}; 

})(jQuery);	

/**
 * @license 
 * jQuery Tools @VERSION / Scrollable Navigator
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/scrollable/navigator.html
 *
 * Since: September 2009
 * Date: @DATE 
 */
/*$('.items div:first').addClass('active');
$('.items div:last').removeClass('active');*/
(function($) {

	var t = $.tools.scrollable; 

	t.navigator = {

		conf: {
			navi: '.navi',
			naviItem: null,		
			activeClass: 'active',
			indexed: false,
			idPrefix: null,

			// 1.2
			history: false
		}
	};		

	function find(root, query) {
		var el = $(query);
		return el.length < 2 ? el : root.parent().find(query);
	}

	// jQuery plugin implementation
	$.fn.navigator = function(conf) {

		// configuration
		if (typeof conf == 'string') { conf = {navi: conf}; } 
		conf = $.extend({}, t.navigator.conf, conf);

		var ret;

		this.each(function() {

			var api = $(this).data("scrollable"),
				 navi = conf.navi.jquery ? conf.navi : find(api.getRoot(), conf.navi), 
				 buttons = api.getNaviButtons(),
				 cls = conf.activeClass,
				 hashed = conf.history && !!history.pushState,
				 size = api.getConf().size;


			// @deprecated stuff
			if (api) { ret = api; }

			api.getNaviButtons = function() {
				return buttons.add(navi);	
			}; 


			if (hashed) {
				history.pushState({i: 0});

				$(window).bind("popstate", function(evt) {
					var s = evt.originalEvent.state;
					if (s) { api.seekTo(s.i); }
				});					
			}

			function doClick(el, i, e) {
				api.seekTo(i);
				e.preventDefault(); 
				if (hashed) { history.pushState({i: i}); }
			}

			function els() {
				return navi.find(conf.naviItem || '> *');	
			}

			function addItem(i) {  

				var item = $("<" + (conf.naviItem || 'a') + "/>").click(function(e)  {
					doClick($(this), i, e);					
				});

				// index number / id attribute
				if (i === 0) {  item.addClass(cls); }
				if (conf.indexed)  { item.text(i + 1); }
				if (conf.idPrefix) { item.attr("id", conf.idPrefix + i); }

				return item.appendTo(navi);
			}


			// generate navigator
			if (els().length) {
				els().each(function(i) { 
					$(this).click(function(e)  {
						doClick($(this), i, e);		
					});
				});

			} else {				
				$.each(api.getItems(), function(i) {
					if (i % size == 0) addItem(i); 
				});
			}   

			// activate correct entry
			api.onBeforeSeek(function(e, index) {
				setTimeout(function() {
					if (!e.isDefaultPrevented()) {	
						var i = index / size,
							 el = els().eq(i);

						if (el.length) { els().removeClass(cls).eq(i).addClass(cls); }
					}
				}, 1);
			}); 

			// new item being added
			api.onAddItem(function(e, item) {
				var i = api.getItems().index(item);
				if (i % size == 0) addItem(i);
			});

		});		

		return conf.api ? ret : this;

	};

})(jQuery);			