/* =======================================================================
 * jQuery.Huihover.js v2.0 Huihover
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.05.05
 *
 * Copyright 2017 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	$.fn.Huihover = function(options,callback1,callback2){
		var defaults = {
			className:"hover",
		}
		var options = $.extend(defaults, options);
		this.each(function(){			
			var that = $(this);
			that.hover(function() {
				that.addClass(options.className);
				if(callback1){
					callback1();
				}
			},
			function() {
				that.removeClass(options.className);
				if(callback2){
					callback2();
				}
			});
		});
	}
} (window.jQuery);